using System.Text;

using EvrenDev.Extensions;
using EvrenDev.Model;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
configuration.AddJsonFile("secret.json", optional: true, reloadOnChange: true);

builder.Services.AddHttpClient<ReCaptcha>(client =>
{
    client.BaseAddress = new Uri("https://www.google.com/recaptcha/api/siteverify");
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
    config.DocumentName = "SendEmailApi";
    config.Title = "Ahasend Email Proxy v1";
    config.Version = "v1";
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins",
        policy =>
        {
            policy.WithOrigins("https://evren.dev", "http://localhost:3000")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigins");

if (app.Environment.IsDevelopment())
{
    app.UseOpenApi();
    app.UseSwaggerUi(config =>
    {
        config.DocumentTitle = "SendEmailApi";
        config.Path = "/apis-docs";
        config.DocumentPath = "/swagger/{documentName}/swagger.json";
        config.DocExpansion = "list";
    });
}

var ahaSendApiKey = configuration.GetValue<string>("Ahasend:Apikey");
var ahaSendApiUrl = configuration.GetValue<string>("Ahasend:ApiUrl");
var from = configuration.GetSection("Ahasend:From").Get<From>();
var recipients = configuration.GetSection("Ahasend:Recipients").Get<List<Recipient>>();

app.MapPost("/sendmail", async (HttpClient httpClient, ReCaptcha recaptcha, [FromBody] FormRequest formRequest) =>
{
    bool checkCaptcha = await recaptcha.IsValid(formRequest.Response ?? string.Empty);
    if (!checkCaptcha)
        return Results.BadRequest("Invalid reCaptcha token.");

    var apiKey = ahaSendApiKey;
    var emailContent = new Content
    {
        Subject = formRequest.Subject,
        TextBody = $"Tel: {formRequest.Phone}\n\nMessage: {formRequest.Message}",
        ReplyTo = new ReplyTo
        {
            Email = formRequest.Email,
            Name = formRequest.Name
        }
    };

    var ahasendRequest = new AhasendRequest
    {
        From = from,
        Recipients = recipients,
        Content = emailContent
    };

    var jsonContent = JsonConvert.SerializeObject(ahasendRequest);
    var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

    httpClient.DefaultRequestHeaders.Add("x-api-key", apiKey);

    var response = await httpClient.PostAsync(ahaSendApiUrl, content);
    var responseContent = await response.Content.ReadAsStringAsync();
    var jsonResponse = new JsonResponse()
    {
        Data = responseContent
    };

    if (response.IsSuccessStatusCode)
    {
        jsonResponse.Success = true;
        jsonResponse.Message = "Email sent successfully.";

        return Results.Ok(jsonResponse);
    }

    return Results.Problem(responseContent, statusCode: (int)response.StatusCode);
});

app.Run();
