using CdbCalculatorApi.Models;

namespace CdbCalculatorApi.Services;

public class CdbService
{
    private const decimal CDI = 0.009m;
    private const decimal TB = 1.08m;

    public CdbResponse CalculateCdb(CdbRequest request)
    {
        decimal grossValue = request.InitialValue;
        for (int i = 0; i < request.Months; i++)
        {
            grossValue *= 1 + (CDI * TB);
        }

        decimal gain = grossValue - request.InitialValue;
        decimal taxRate = GetTaxRate(request.Months);
        decimal tax = gain * taxRate;
        decimal netValue = grossValue - tax;

        return new CdbResponse
        {
            GrossValue = grossValue,
            NetValue = netValue
        };
    }

    public decimal GetTaxRate(int months)
    {
        if (months <= 6) return 0.225m;
        if (months <= 12) return 0.20m;
        if (months <= 24) return 0.175m;
        return 0.15m;
    }
}
