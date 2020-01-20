
using AttendanceApp.DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AttendanceApp.DataAccessLayer.Repository
{
    public interface IRepository<TEntity> where TEntity : class //: BaseModel
    {
        void Delete(TEntity entityToDelete);
        void Delete(int id);

        IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "");

        Task<IEnumerable<TEntity>> GetAsync(
           Expression<Func<TEntity, bool>> filter = null,
           Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
           string includeProperties = "");

        Task<TEntity> GetOneAsync(
                  Expression<Func<TEntity, bool>> filter = null,
                  Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
                  string includeProperties = "");

        TEntity GetOne(
           Expression<Func<TEntity, bool>> filter = null,
           Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
           string includeProperties = "");

        TEntity GetByID(int id);
        //IEnumerable<TEntity> GetWithRawSql(string query,
        //    params object[] parameters);
        void Insert(TEntity entity);
        void Update(TEntity entityToUpdate);
    }
}
