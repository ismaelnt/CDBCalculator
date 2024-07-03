using CdbCalculatorApi.Models;
using CdbCalculatorApi.Services;

public class CdbServiceTests
{
    private readonly CdbService _service;

    public CdbServiceTests()
    {
        _service = new CdbService();
    }

    [Fact]
    public void CalculateCDB_ShouldReturnExpectedResult()
    {
        var request = new CdbRequest
        {
            InitialValue = 1000,
            Months = 12
        };
        var expectedGrossValue = 1123.08m;
        var expectedNetValue = 1098.46m;
        var tolerance = 0.02m;

        var result = _service.CalculateCdb(request);

        Assert.True(Math.Abs(result.GrossValue - expectedGrossValue) < tolerance, $"Expected {expectedGrossValue}, but got {result.GrossValue}");
        Assert.True(Math.Abs(result.NetValue - expectedNetValue) < tolerance, $"Expected {expectedNetValue}, but got {result.NetValue}");
    }

    [Theory]
    [InlineData(5, 0.225)]
    [InlineData(12, 0.20)]
    [InlineData(18, 0.175)]
    [InlineData(25, 0.15)]
    public void GetTaxRate_ShouldReturnExpectedRate(int months, decimal expectedRate)
    {
        var rate = _service.GetTaxRate(months);

        Assert.Equal(expectedRate, rate);
    }
}
