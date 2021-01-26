using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.Responses;
using System.Threading.Tasks;

namespace Bookstore.Abstract.IServices
{
    public interface IBookService
    {
        Task<ItemPlainResponse<BookDto>> Add(BookDto book);
        Task<ItemPlainResponse<BookDto>> Edit(BookDto book);
    }
}
