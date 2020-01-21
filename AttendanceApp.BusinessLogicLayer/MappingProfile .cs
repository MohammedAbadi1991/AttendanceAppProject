using System;
using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AutoMapper;

namespace AttendanceApp.BusinessLogicLayer
{
    public class MappingProfile : Profile
    {
        public override string ProfileName
        {
            get { return "AttendanceDomainMappings"; }
        }

        public MappingProfile()
        {
            CreateMap<SessionModel, Session>();

            CreateMap<Session, SessionModel>();
            CreateMap<Location, LocationModel>();
            CreateMap<User, UserModel>();
            CreateMap<Student, StudentModel>();
            CreateMap<StudentAttendance, StudentAttendanceModel>();
            CreateMap<StudentModel, Student>();
        }
    }
}
