using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        //private readonly IStudentBusinessLogic _studentBusinessLogic;
        //private readonly ISessionBusinessLogic _sessionBusinessLogic;

        //public ReportController(ISessionBusinessLogic sessionBusinessLogic, IStudentBusinessLogic studentBusinessLogic)
        //{
        //    _sessionBusinessLogic = sessionBusinessLogic;
        //    _studentBusinessLogic = studentBusinessLogic;
        //}

        // GET: api/Report
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Report/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Report
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Report/5
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
