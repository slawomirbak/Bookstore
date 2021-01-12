using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Abstract.IService
{
    public interface IAuthorService
    {
        Task<ItemPlainResponse<AuthorDto>> Add(AuthorDto author);
        Task<ItemPlainResponse<AuthorDto>> Edit(AuthorDto author);
        Task<ItemPlainResponse<AuthorDto>> EditProperty(int itemId, string propertyName, string propertyValue);
    }
}
