using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> GetByUserNamePass(string username, string password);
    }
}
