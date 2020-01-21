using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public interface IStudentBusinessLogic
    {
        IList<StudentModel> GetAll();
        int InsertNewStudent(StudentModel student);
    }
}
