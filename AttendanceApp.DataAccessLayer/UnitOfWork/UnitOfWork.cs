using AttendanceApp.DataAccessLayer.Models;
using AttendanceApp.DataAccessLayer.Repository;

namespace AttendanceApp.DataAccessLayer.UnitOfWork
{

    public class UnitOfWork : IUnitOfWork
    {

        private AttendanceDbContext _dbContext;

        public UnitOfWork(AttendanceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IUserRepository Users => new UserRepository(_dbContext);
        public IStudentRepository Students => new StudentRepository(_dbContext);
        public ISessionRepository Sessions => new SessionRepository(_dbContext);
        public ILocationRepository Locations => new LocationRepository(_dbContext);
        public IMajorRepository Majors => new MajorRepository(_dbContext);
        public IStudentAttendanceRepository StudentAttendances => new StudentAttendanceRepository(_dbContext);

        public void Commit()
        {
            _dbContext.SaveChanges();
        }
    }
}
