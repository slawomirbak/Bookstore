using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.BookRepository
{
    public interface IBookRepository
    {
        Task Create(Book book);
        void Edit(Book book);
        Task<Book> GetById(int id);
        Task AddBookAuthor(BookAuthor bookAuthor);
        void RemoveBookAuthor(BookAuthor bookAuthor);
        Task<List<Book>> GetList();
    }
}
