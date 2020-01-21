using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.Models
{
    public class StudentAndSessionIdModel
    {
        public StudentModel Student { get; set; }
        public int SessionId { get; set; }
    }
}
