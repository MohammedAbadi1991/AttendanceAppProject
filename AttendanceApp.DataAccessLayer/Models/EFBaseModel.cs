using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.DataAccessLayer.Models
{
    public interface IEFBaseModel
    {
        int Id { get; set; }
    }

    partial class Student : IEFBaseModel
    {
    }
    partial class Session : IEFBaseModel
    {
    }
    partial class Location : IEFBaseModel
    {
    }

    partial class StudentAttendance : IEFBaseModel
    {
    }
    partial class User : IEFBaseModel
    {
    }
    partial class Major : IEFBaseModel
    {
    }
}
