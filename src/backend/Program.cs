using System.Text;

using EvrenDev.Model;

using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
configuration.AddJsonFile("secret.json", optional: true, reloadOnChange: true);

builder.Services.AddHttpClient();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
    config.DocumentName = "SendEmailApi";
    config.Title = "Ahasend Email Proxy v1";
    config.Version = "v1";
});

var app = builder.Build();

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

app.MapPost("/send-mail", async (HttpClient httpClient, [FromBody] Request emailRequest) =>
{
    var apiKey = ahaSendApiKey;

    var emailContent = new Content
    {
        Subject = emailRequest.Subject,
        TextBody = $"Tel: {emailRequest.Phone}\n\nMessage: {emailRequest.Message}",
        ReplyTo = new ReplyTo
        {
            Email = emailRequest.Email,
            Name = emailRequest.Name
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

    if (response.IsSuccessStatusCode)
    {
        return Results.Ok("Email sent successfully.");
    }
    else
    {
        var errorContent = await response.Content.ReadAsStringAsync();
        return Results.Problem(errorContent, statusCode: (int)response.StatusCode);
    }
});

app.Run();
