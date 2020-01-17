using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public class StudentRepository : BaseRepository<Student>, IStudentRepository
    {
        public StudentRepository(AttendanceDbContext context) : base(context)
        {
        }
    }
}
