using AttendanceApp.BusinessLogicLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public interface IUserBusinessLogic
    {
        IList<UserModel> GetAll();
        Task<UserModel> Authenticate(string username, string password);
    }
}
