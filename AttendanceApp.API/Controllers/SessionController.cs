using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using AttendanceApp.BusinessLogicLayer.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AttendanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ISessionBusinessLogic _sessionBusinessLogic;

        public SessionController(ISessionBusinessLogic sessionBusinessLogic)
        {
            _sessionBusinessLogic = sessionBusinessLogic;
        }

        // GET: api/<controller>/All
        [HttpGet("All")]
        public IEnumerable<SessionModel> GetAll()
        {
            return _sessionBusinessLogic.GetAll();
        }

        // GET: api/Session
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Session 2", "Session 2 - 2" };
        }

        // GET: api/Session/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Session
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Session/5
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
