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
            grossValue *= (1 + (CDI * TB));
        }

        decimal netValue = grossValue - (grossValue - request.InitialValue) * GetTaxRate(request.Months);

        return new CdbResponse
        {
            GrossValue = Math.Round(grossValue, 2),
            NetValue = Math.Round(netValue, 2)
        };
    }

    public decimal GetTaxRate(int months)
    {
        if (months <= 6)
        {
            return 0.225m;
        }
        else if (months <= 12)
        {
            return 0.20m;
        }
        else if (months <= 24)
        {
            return 0.175m;
        }
        else
        {
            return 0.15m;
        }
    }
}
