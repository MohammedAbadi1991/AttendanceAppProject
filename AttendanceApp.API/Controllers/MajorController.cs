using System.Collections.Generic;
using AttendanceApp.API.Model;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using AttendanceApp.BusinessLogicLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MajorController : ControllerBase
    {
        private readonly IMajorBusinessLogic _MajorBusinessLogic;

        public MajorController(IMajorBusinessLogic MajorBusinessLogic)
        {
            _MajorBusinessLogic = MajorBusinessLogic;
        }
        
        [HttpGet("All")]
        public APIResponseModel<IList<MajorModel>> GetAll()
        {
            return new APIResponseModel<IList<MajorModel>>(
                "", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, _MajorBusinessLogic.GetAll());
        }
    }
}
