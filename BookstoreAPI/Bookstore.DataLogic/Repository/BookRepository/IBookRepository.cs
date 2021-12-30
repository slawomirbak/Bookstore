using Bookstore.DataLogic.Entities;
using System.Collections.Generic;
using System.Linq;
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
        IQueryable<Book> Search(string query);
        Task Vote(int userId, int bookId, int rate);
        Task CreateTest(Test test);
        Task<List<Test>> GetTests(int bookId);
    }
}
