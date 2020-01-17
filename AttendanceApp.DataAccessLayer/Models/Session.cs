using System;
using System.Collections.Generic;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class Session
    {
        public Session()
        {
            StudentAttendance = new HashSet<StudentAttendance>();
        }

        public int Id { get; set; }
        public DateTime SessionDate { get; set; }
        public int LocationId { get; set; }

        public virtual Location Location { get; set; }
        public virtual ICollection<StudentAttendance> StudentAttendance { get; set; }
    }
}
