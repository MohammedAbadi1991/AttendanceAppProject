using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class SessionRepository : BaseRepository<Session>, ISessionRepository
    {
        public SessionRepository(AttendanceDbContext context) : base(context)
        {
        }

        public Session GetByIdWithLocation(int sessionId)
        {
            return base.GetOne(x=> x.Id == sessionId, null, "Location");
        }

        public IEnumerable<Session> GetWithLocations()
        {
            return base.Get(null, null, "Location").ToList();
        }

    }
}
