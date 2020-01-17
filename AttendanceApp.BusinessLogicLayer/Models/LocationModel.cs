using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.Models
{
    public class LocationModel
    {
        public LocationModel()
        {
            //SessionModel = new List<SessionModel>();
            //StudentModel = new List<StudentModel>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        //public virtual IList<SessionMdoel> Session { get; set; }
        //public virtual IList<StudentModel> Student { get; set; }
    }
}
