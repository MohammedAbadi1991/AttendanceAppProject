using System;
using System.Collections.Generic;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class StudentAttendance
    {
        public int Id { get; set; }
        public int SessionId { get; set; }
        public int StudentId { get; set; }
        public DateTime RegistrationTime { get; set; }

        public virtual Session Session { get; set; }
        public virtual Student Student { get; set; }
    }
}
