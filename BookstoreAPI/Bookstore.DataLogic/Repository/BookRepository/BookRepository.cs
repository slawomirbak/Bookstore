using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Repository.BookRepository
{
    public class BookRepository: BaseRepository<Book>, IBookRepository
    {
        public BookRepository(DefaultContext defaultContext): base(defaultContext)
        {
        }
    }
}
