namespace EvrenDev.Model;
public class Content
{
    public string? Subject { get; set; }
    public string? TextBody { get; set; }
    public ReplyTo? ReplyTo { get; set; }
}

public class From
{
    public string? Email { get; set; }
    public string? Name { get; set; }
}

public class Recipient
{
    public string? Email { get; set; }
    public string? Name { get; set; }
}

public class ReplyTo
{
    public string? Email { get; set; }
    public string? Name { get; set; }
}

public class AhasendRequest
{
    public From? From { get; set; }
    public List<Recipient>? Recipients { get; set; }
    public Content? Content { get; set; }
}