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
            var sessions = _unitOfWork.Sessions.Get();
            return _mapper.Map<IEnumerable<Session>, IList<SessionModel>>(sessions);


            //var sessions = _unitOfWork.Sessions.Get();
            //return sessions.Select(x => new SessionModel() { SessionDate = x.SessionDate.ToShortDateString() }).ToList();
        }
    }
}
