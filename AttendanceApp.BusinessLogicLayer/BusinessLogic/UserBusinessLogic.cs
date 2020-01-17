using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class UserBusinessLogic : BaseBusinessLogic, IUserBusinessLogic
    {
        public UserBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {

        }

        public async Task<UserModel> Authenticate(string username, string password)
        {
            var user = await _unitOfWork.Users.GetByUserNamePass(username, password);
            return _mapper.Map<User, UserModel>(user);
        }

        public IList<UserModel> GetAll()
        {
            //var sessions = _unitOfWork.Sessions.Get();
            //return _mapper.Map<IEnumerable<Session>, IList<SessionModel>>(sessions);
            return null;
        }
    }
}
