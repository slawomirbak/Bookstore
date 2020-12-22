using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.AuthorRepository
{
    public class AuthorRepository : BaseRepository<Author>, IAuthorRepository
    {
        public AuthorRepository(DefaultContext context) : base(context)
        {
        }

        public async Task Create(Author author)
        {
            await _context.Authors.AddAsync(author);
        }
    }
}
