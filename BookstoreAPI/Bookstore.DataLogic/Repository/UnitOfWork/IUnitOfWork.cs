using Bookstore.DataLogic.Repository.AuthorRepository;
using Bookstore.DataLogic.Repository.BookRepository;
using Bookstore.DataLogic.Repository.UserRepository;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository { get; }
        IBookRepository bookRepository { get; }
        IAuthorRepository authorRepository { get; }
        Task Save();
    }
}
