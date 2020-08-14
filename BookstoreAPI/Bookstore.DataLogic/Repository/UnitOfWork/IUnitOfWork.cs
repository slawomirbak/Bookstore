using Bookstore.DataLogic.Repository.BookRepository;
using Bookstore.DataLogic.Repository.UserRepository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.UnitOfWork
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository { get; }
        IBookRepository bookRepository { get; }
        Task Save();
    }
}
