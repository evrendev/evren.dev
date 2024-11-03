using Newtonsoft.Json.Linq;

namespace EvrenDev.Extensions;

public class ReCaptcha
{
    private readonly HttpClient _captchaClient;

    private readonly IConfiguration _configuration;

    private readonly ILogger<ReCaptcha> _logger;

    public ReCaptcha(HttpClient captchaClient,
        IConfiguration configuration,
        ILogger<ReCaptcha> logger)
    {
        _captchaClient = captchaClient;
        _configuration = configuration;
        _logger = logger;
    }

    public async Task<bool> IsValid(string token)
    {
        try
        {
            string? secretKey = _configuration.GetSection("Google:Recaptcha.SecretKey").Get<string>();
            HttpResponseMessage postTask = await _captchaClient
                .PostAsync($"?secret={secretKey}&response={token}", new StringContent(""));
            string result = await postTask.Content.ReadAsStringAsync();
            JObject? resultObject = JObject.Parse(result);
            dynamic success = resultObject["success"] ?? false;
            return (bool)success;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
            return false;
        }
    }
}