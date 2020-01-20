using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public interface ISessionRepository : IRepository<Session>
    {
        IEnumerable<Session> GetWithLocations();
        Session GetByIdWithLocation(int sessionId);
    }
}
