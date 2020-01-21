using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.API.Model;
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
        
        [HttpGet("All")]
        public APIResponseModel<IList<LocationModel>> GetAll()
        {
            return new APIResponseModel<IList<LocationModel>>(
                "", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, _locationBusinessLogic.GetAll());
        }

        //// GET: api/Location/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Location
        [HttpPost()]
        public APIResponseModel<string> Post([FromBody] LocationModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Name))
            return new APIResponseModel<string>(
                "Cannot insert empty location.", StatusCodes.Status406NotAcceptable.ToString(), StatusCodes.Status406NotAcceptable, "");

            _locationBusinessLogic.Insert(model.Name);

            return new APIResponseModel<string>(
               "Location inserted successfully", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, "");
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
