﻿using AttendanceApp.DataAccessLayer.Repository;
using AttendanceApp.DataAccessLayer.Models;

namespace AttendanceApp.DataAccessLayer.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository Users { get; }
        ILocationRepository Locations { get; }
        ISessionRepository Sessions { get; }
        IStudentRepository Students { get; }

        void Commit();
    }

}
