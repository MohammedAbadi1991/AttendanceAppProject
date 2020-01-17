using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class LocationRepository : BaseRepository<Location>, ILocationRepository
    {
        public LocationRepository(AttendanceDbContext context) : base(context)
        {

        }
    }
}
