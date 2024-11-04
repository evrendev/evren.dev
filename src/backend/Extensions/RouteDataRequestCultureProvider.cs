using Microsoft.AspNetCore.Localization;

namespace EvrenDev.Extensions;
public class RouteDataRequestCultureProvider : RequestCultureProvider
{
    public int IndexOfCulture;
    public int IndexofUiCulture;

    public override Task<ProviderCultureResult?> DetermineProviderCultureResult(HttpContext httpContext)
    {
        if (httpContext == null)
            throw new ArgumentNullException(nameof(httpContext));

        var pathValue = httpContext.Request.Path.Value;
        var culture = pathValue != null ? pathValue.Split('/')[IndexOfCulture] : null;
        var uiCulture = pathValue != null ? pathValue.Split('/')[IndexOfCulture] : null;

        var providerResultCulture = new ProviderCultureResult(culture, uiCulture);

        return Task.FromResult<ProviderCultureResult?>(providerResultCulture);
    }
}
