using System.Text.Json.Serialization;

namespace EvrenDev.Model;

public class AhaSendResponse
{
    [JsonPropertyName("success_count")]
    public int? SuccessCount { get; set; }
    [JsonPropertyName("fail_count")]
    public int? FailCount { get; set; }
    [JsonPropertyName("failed_recipients")]
    public List<string>? FailedRecipients { get; set; }
    public List<string>? Errors { get; set; }
}