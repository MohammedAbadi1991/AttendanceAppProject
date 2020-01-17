using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class SessionRepository : BaseRepository<Session>, ISessionRepository
    {
        public SessionRepository(AttendanceDbContext context) : base(context)
        {
        }
    }
}
