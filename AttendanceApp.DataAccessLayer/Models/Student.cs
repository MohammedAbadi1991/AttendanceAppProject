using System;
using System.Collections.Generic;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class Student
    {
        public Student()
        {
            StudentAttendance = new HashSet<StudentAttendance>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public int? Age { get; set; }
        public int? TownId { get; set; }
        public short? Major { get; set; }
        public short? BloodType { get; set; }

        public virtual Location Town { get; set; }
        public virtual ICollection<StudentAttendance> StudentAttendance { get; set; }
    }
}
