using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected DefaultContext _context;

        public BaseRepository(DefaultContext context)
        {
            _context = context;
        }
    }
}
