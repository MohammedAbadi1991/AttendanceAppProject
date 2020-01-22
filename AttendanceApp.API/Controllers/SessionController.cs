using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AttendanceApp.API.Model;
using AttendanceApp.BusinessLogicLayer.BusinessLogic;
using AttendanceApp.BusinessLogicLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AttendanceApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ISessionBusinessLogic _sessionBusinessLogic;
        private readonly IStudentBusinessLogic _studentBusinessLogic;

        public SessionController(ISessionBusinessLogic sessionBusinessLogic, IStudentBusinessLogic studentBusinessLogic)
        {
            _sessionBusinessLogic = sessionBusinessLogic;
            _studentBusinessLogic = studentBusinessLogic;
        }

        // GET: api/<controller>/All
        [HttpGet("All")]
        public APIResponseModel<IList<SessionModel>> GetAll()
        {
            return new APIResponseModel<IList<SessionModel>>(
                "", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, _sessionBusinessLogic.GetAll());
        }

        //// GET: api/Session
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "Session 2", "Session 2 - 2" };
        //}

        // GET: api/Session/5
        [HttpGet("{id}")]
        public APIResponseModel<SessionModel> Get(int id)
        {
            return new APIResponseModel<SessionModel>(
                "", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, _sessionBusinessLogic.GetById(id));

        }

        // POST: api/Session
        [HttpPost]
        public APIResponseModel<string> Post([FromBody] SessionModel model)
        {
            //_sessionBusinessLogic.Insert(model);
            //return Ok();


            if (model.LocationId <= 0)
                return new APIResponseModel<string>(
                    "Cannot insert empty session.", StatusCodes.Status406NotAcceptable.ToString(), StatusCodes.Status406NotAcceptable, "");

            _sessionBusinessLogic.Insert(model);

            return new APIResponseModel<string>(
               "Session inserted successfully", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, "");
        }

        //// PUT: api/Session/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}


        // POST: api/Session/RegisterNewStudent
        [HttpPost("RegisterStudent")]
        public APIResponseModel<string> RegisterStudent([FromBody] StudentAndSessionIdModel model)
        {
            int userId;
            if (model.Student.Id > 0)
            {
                userId = model.Student.Id;
            }
            else
            {
                userId = _studentBusinessLogic.InsertNewStudent(model.Student);
            }
            //_sessionBusinessLogic.RegisterStudentToSession(model.SessionId, userId);
            
            return new APIResponseModel<string>(
               "Session inserted successfully", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, "");
        }

        // GET: api/Session/GetStudentByPhone/id
        [HttpGet("GetStudentByPhone")]
        public APIResponseModel<StudentModel> GetStudentByPhone(string phoneNumber)
        {
            var result = _sessionBusinessLogic.GetStudentByPhone(phoneNumber);

            if (result == null)
                return new APIResponseModel<StudentModel>(
                    "", StatusCodes.Status404NotFound.ToString(), StatusCodes.Status404NotFound, null);
            else
                return new APIResponseModel<StudentModel>(
                    "", StatusCodes.Status200OK.ToString(), StatusCodes.Status200OK, result);

        }

    }
}
