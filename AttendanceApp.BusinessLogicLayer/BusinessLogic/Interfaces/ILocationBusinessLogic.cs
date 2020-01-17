using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public interface ILocationBusinessLogic
    {
        IList<LocationModel> GetAll();
        void Insert(string locationName);
    }
}
