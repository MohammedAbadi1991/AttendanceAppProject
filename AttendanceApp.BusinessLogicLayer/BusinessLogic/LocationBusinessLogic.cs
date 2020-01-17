using AttendanceApp.BusinessLogicLayer.Models;
using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.UnitOfWork;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace AttendanceApp.BusinessLogicLayer.BusinessLogic
{
    public class LocationBusinessLogic : BaseBusinessLogic, ILocationBusinessLogic
    {
        public LocationBusinessLogic(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {

        }

        public IList<LocationModel> GetAll()
        {
            var locations = _unitOfWork.Locations.Get();
            return _mapper.Map<IEnumerable<Location>, IList<LocationModel>>(locations);
        }

        public void Insert(string locationName)
        {
            _unitOfWork.Locations.Insert(new Location() { Name = locationName });
            _unitOfWork.Commit();
        }
    }
}
