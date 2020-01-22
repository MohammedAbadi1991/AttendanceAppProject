using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class MajorBusinessLogic : BaseBusinessLogic, IMajorBusinessLogic
    {
        public MajorBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {

        }

        public IList<MajorModel> GetAll()
        {
            var Majors = _unitOfWork.Majors.Get();
            return _mapper.Map<IEnumerable<Major>, IList<MajorModel>>(Majors);
        }
    }
}
