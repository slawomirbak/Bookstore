using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.AuthorRepository
{
    public interface IAuthorRepository
    {
        Task Create(Author author);
    }
}
