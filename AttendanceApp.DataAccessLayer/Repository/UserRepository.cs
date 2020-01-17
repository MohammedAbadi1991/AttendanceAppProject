using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(AttendanceDbContext context) : base(context)
        {
        }
        public Task<User> GetByUserNamePass(string username, string password)
        {
            return base.GetOneAsync(user => user.Name == username && user.Password == password);
        }
    }
}
