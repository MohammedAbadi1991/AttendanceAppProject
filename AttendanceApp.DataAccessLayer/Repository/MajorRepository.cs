using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class MajorRepository : BaseRepository<Major>, IMajorRepository
    {
        public MajorRepository(AttendanceDbContext context) : base(context)
        {

        }
    }
}
