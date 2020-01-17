using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.Models
{
    public class SessionModel
    {
        public SessionModel()
        {
           //StudentAttendance = new HashSet<StudentAttendanceModel>();
        }

        public int Id { get; set; }
        public string SessionDate { get; set; }
        public int LocationId { get; set; }

        public virtual LocationModel Location { get; set; }
        //public virtual ICollection<StudentAttendanceModel> StudentAttendance { get; set; }
    }
}
