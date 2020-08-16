using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Repository.AuthorRepository
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(DefaultContext context) : base(context)
        {
        }
    }
}
