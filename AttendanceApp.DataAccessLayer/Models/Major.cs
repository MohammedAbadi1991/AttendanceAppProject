using System;
using System.Collections.Generic;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class Major
    {
        public Major()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string MajorName { get; set; }

        public virtual ICollection<Student> Student { get; set; }
    }
}
