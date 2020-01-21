using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class StudentBusinessLogic : BaseBusinessLogic, IStudentBusinessLogic
    {
        public StudentBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {

        }

        public IList<StudentModel> GetAll()
        {
            //var sessions = _unitOfWork.Sessions.Get();
            //return _mapper.Map<IEnumerable<Session>, IList<SessionModel>>(sessions);
            return null;
        }

        public int InsertNewStudent(StudentModel student)
        {
            var newStudent = _mapper.Map<StudentModel, Student>(student);
            return  _unitOfWork.Students.InsertWithReturn(newStudent);
        }
    }
}
