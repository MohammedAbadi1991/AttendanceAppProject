using System;
using System.Collections.Generic;

namespace AttendanceApp.DataAccessLayer.Models
{
    public partial class Location
    {
        public Location()
        {
            Session = new HashSet<Session>();
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Session> Session { get; set; }
        public virtual ICollection<Student> Student { get; set; }
    }
}
