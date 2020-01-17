//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using AttendanceApp.BusinessLogicLayer.BusinessLogic;
//using AttendanceApp.BusinessLogicLayer.Models;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace AttendanceApp.API.Controllers
//{
//    [Authorize]
//    [ApiController]
//    [Route("[controller]")]
//    public class UsersController : ControllerBase
//    {
//        private IUserBusinessLogic _userService;

//        public UsersController(IUserBusinessLogic userService)
//        {
//            _userService = userService;
//        }

//        [AllowAnonymous]
//        [HttpPost("authenticate")]
//        public async Task<IActionResult> Authenticate([FromBody]UserModel model)
//        {
//            // REFERENCE: https://jasonwatmore.com/post/2019/10/21/aspnet-core-3-basic-authentication-tutorial-with-example-api#users-controller-cs

//            var user = await _userService.Authenticate(model.Name, model.Password);

//            if (user == null)
//                return BadRequest(new { message = "Username or password is incorrect" });

//            return Ok(user);
//        }

//        //[HttpGet]
//        //public async Task<IActionResult> GetAll()
//        //{
//        //    var users = await _userService.GetAll();
//        //    return Ok(users);
//        //}
//    }
//}
