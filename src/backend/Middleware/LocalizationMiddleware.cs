using System.Globalization;

using Microsoft.Extensions.Primitives;

namespace EvrenDev.Middleware;

public class LocalizationMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        if (context.Request.Headers.TryGetValue("Accept-Language", out StringValues cultureKey)
            && DoesCultureExist(cultureKey))
        {
            var culture = new CultureInfo(cultureKey.ToString());
            Thread.CurrentThread.CurrentCulture = culture;
            Thread.CurrentThread.CurrentUICulture = culture;
        }

        await next(context);
    }

    private static bool DoesCultureExist(string? cultureName)
    {
        return CultureInfo.GetCultures(CultureTypes.AllCultures)
                          .Any(culture => string.Equals(culture.Name, cultureName, StringComparison.OrdinalIgnoreCase));
    }
}