using AutoMapper;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Bookstore.DataLogic.Entities;
using Bookstore.DataLogic.Repository.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Services.BookService
{
    public class BookService : BaseService, IBookService
    {
        public BookService(IUnitOfWork unitOfWork, IMapper mapper) : base(unitOfWork, mapper)
        {
        }

        public async Task<ItemPlainResponse<BookDto>> Add(BookDto bookDto)
        {
            List<Author> authors = new List<Author>();

            authors = _mapper.Map<List<Author>>(bookDto.Author);
            bookDto.Author = null;
            Book book = _mapper.Map<Book>(bookDto);

            await _unitOfWork.bookRepository.Create(book);

            foreach (var author in authors)
            {
                var bookAuthor = new BookAuthor { Author = author, Book = book };
                await _unitOfWork.bookRepository.AddBookAuthor(bookAuthor);
            }

            await _unitOfWork.Save();

            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }

        public async Task<ItemPlainResponse<BookDto>> Edit(BookDto bookDto)
        {
            Book book = _mapper.Map<Book>(bookDto);
            _unitOfWork.bookRepository.Edit(book);
            await _unitOfWork.Save();
            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }
    }
}
