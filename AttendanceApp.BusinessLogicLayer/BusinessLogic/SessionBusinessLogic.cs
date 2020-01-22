using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class SessionBusinessLogic : BaseBusinessLogic, ISessionBusinessLogic
    {
        public SessionBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {

        }

        public IList<SessionModel> GetAll()
        {
            var sessions = _unitOfWork.Sessions.GetWithLocations();
            return _mapper.Map<IEnumerable<Session>, IList<SessionModel>>(sessions);
        }

        public SessionModel GetById(int id)
        {
            var session = _unitOfWork.Sessions.GetByIdWithLocation(id);
            return _mapper.Map<Session, SessionModel>(session);
        }

        public StudentModel GetStudentByPhone(string phoneNumber)
        {
            var student =_unitOfWork.Students.GetOne(st => st.PhoneNumber == phoneNumber);
            if (student != null)
                return _mapper.Map<Student, StudentModel>(student);
            return null;
        }

        public void Insert(SessionModel model)
        {
            var newSession = _mapper.Map<SessionModel, Session>(model);
            _unitOfWork.Sessions.Insert(newSession);
            _unitOfWork.Commit();
        }

        public void RegisterStudentToSession(int sessionId, int studentId)
        {
            var newAttendance = new StudentAttendance() { RegistrationTime = DateTime.Now, SessionId = sessionId, StudentId = studentId };
            _unitOfWork.StudentAttendances.Insert(newAttendance);
            _unitOfWork.Commit();
        }
    }
}
