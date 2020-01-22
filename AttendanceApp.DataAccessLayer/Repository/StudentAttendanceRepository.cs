using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class StudentAttendanceRepository : BaseRepository<StudentAttendance>, IStudentAttendanceRepository
    {
        public StudentAttendanceRepository(AttendanceDbContext context) : base(context)
        {
        }
    }
}
