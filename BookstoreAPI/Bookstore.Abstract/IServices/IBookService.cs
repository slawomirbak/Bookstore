using System.Collections.Generic;
using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.Responses;

namespace Bookstore.Abstract.IServices
{
    public interface IBookService
    {
        Task<ItemPlainResponse<BookDto>> Add(BookDto book);
        Task<ItemPlainResponse<BookDto>> Edit(BookDto book);
        Task<ItemPlainResponse<BookDto>> GetById(int id);
        Task<ItemPlainResponse<BookDto>> EditProperty(int itemId, string propertyName, string propertyValue);
        Task<ItemPlainResponse<List<BookDto>>> GetList();
        Task<ItemsPagingResponse<List<BookDto>>> Search(string search, int page, int limit);
        Task<BasePlainResponse> RateBook(string email, int bookId, int rate);
        Task PaymentOrder(string email, int bookId);
    }
}