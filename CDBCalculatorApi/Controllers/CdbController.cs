using CdbCalculatorApi.Models;
using CdbCalculatorApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CDBCalculatorApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CdbController : ControllerBase
{
    private readonly CdbService _cdbService;

    public CdbController()
    {
        _cdbService = new CdbService();
    }

    [HttpPost("calculate")]
    public ActionResult<CdbResponse> Calculate(CdbRequest request)
    {
        if (request.InitialValue <= 0 || request.Months <= 0)
        {
            return BadRequest("Invalid input values.");
        }

        var result = _cdbService.CalculateCdb(request);
        return Ok(result);
    }
}
