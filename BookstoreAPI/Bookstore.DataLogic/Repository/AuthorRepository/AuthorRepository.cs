using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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

        public void Edit(Author author)
        {
            _context.Authors.Update(author);

        }

        public async Task<Author> GetById(int id)
        {
            return await _context.Authors.FirstOrDefaultAsync(x => x.Id == id);
        }

    }
}
