using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.Repository;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class BaseBusinessLogic
    {
        protected readonly IMapper _mapper;
        protected readonly IUnitOfWork _unitOfWork;

        public BaseBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
    }
}
