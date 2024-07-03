using CdbCalculatorApi.Models;
using CdbCalculatorApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CdbCalculatorApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CdbController : ControllerBase
{
    private readonly CdbService _cdbService;

    public CdbController(CdbService cdbService)
    {
        _cdbService = cdbService;
    }

    [HttpPost("calculate")]
    public IActionResult Calculate([FromBody] CdbRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var result = _cdbService.CalculateCdb(request);
        return Ok(result);
    }
}
