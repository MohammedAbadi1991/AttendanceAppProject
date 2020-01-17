using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using AttendanceApp.BusinessLogicLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationBusinessLogic _locationBusinessLogic;

        public LocationController(ILocationBusinessLogic locationBusinessLogic)
        {
            _locationBusinessLogic = locationBusinessLogic;
        }

        // GET: api/Location
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("All")]
        public IEnumerable<LocationModel> GetAll()
        {
            return _locationBusinessLogic.GetAll();
        }

        // GET: api/Location/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Location
        [HttpPost()]
        public IActionResult Post([FromBody] LocationModel model)
        {
            _locationBusinessLogic.Insert(model.Name);
            return Ok();
        }

        // PUT: api/Location/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
