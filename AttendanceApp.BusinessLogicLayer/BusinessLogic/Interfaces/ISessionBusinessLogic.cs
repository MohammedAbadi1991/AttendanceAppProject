using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public interface ISessionBusinessLogic
    {
        IList<SessionModel> GetAll();
        void Insert(SessionModel model);
        SessionModel GetById(int id);
        StudentModel GetStudentByPhone(string phoneNumber);
    }
}
