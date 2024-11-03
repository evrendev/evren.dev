namespace EvrenDev.Model;

public class Request
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Subject { get; set; }
    public string? Message { get; set; }
    public string? RecaptchaToken { get; set; }
}