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
using System.Linq;
using Microsoft.EntityFrameworkCore;

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

            await _unitOfWork.Save();

            foreach (var author in authors)
            {
                //Get author from dbo to have author with context
                var authorDB = await _unitOfWork.authorRepository.GetById(author.Id);
                var bookAuthor = new BookAuthor { Author = authorDB, Book = book };
                await _unitOfWork.bookRepository.AddBookAuthor(bookAuthor);
            }

            await _unitOfWork.Save();

            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }

        public async Task<ItemPlainResponse<BookDto>> Edit(BookDto bookDto)
        {
            List<Author> authors = new List<Author>();

            authors = _mapper.Map<List<Author>>(bookDto.Author);
            bookDto.Author = null;
            Book book = _mapper.Map<Book>(bookDto);

            _unitOfWork.bookRepository.Edit(book);

            await _unitOfWork.Save();

            // get current book
            Book currentBookAuthor = await _unitOfWork.bookRepository.GetById(book.Id);

            foreach (var author in authors)
            {
                if (currentBookAuthor.Author.Any(x => x.Author.Id == author.Id)) {
                    continue;
                }
                else
                {
                    var authorDB = await _unitOfWork.authorRepository.GetById(author.Id);
                    var bookAuthor = new BookAuthor { Author = authorDB, Book = book };
                    await _unitOfWork.bookRepository.AddBookAuthor(bookAuthor);
                }
            }

            Book bookAfterSavedAuthors = await _unitOfWork.bookRepository.GetById(book.Id);

            foreach (var bookAuthor in bookAfterSavedAuthors.Author)
            {
                if (!authors.Any(x => x.Id == bookAuthor.Author.Id))
                {
                    _unitOfWork.bookRepository.RemoveBookAuthor(bookAuthor);
                }
            }

            await _unitOfWork.Save();

            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }

        public async Task<ItemPlainResponse<BookDto>> GetById(int itemID)
        {
            Book book = await _unitOfWork.bookRepository.GetById(itemID);
            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }

        public async Task<ItemPlainResponse<BookDto>> EditProperty(int itemId, string propertyName, string propertyValue)
        {
            Book book = await _unitOfWork.bookRepository.GetById(itemId);
            book.GetType().GetProperty(propertyName).SetValue(book, propertyValue);
            return await Edit(book);
        }

        private async Task<ItemPlainResponse<BookDto>> Edit(Book book)
        {
            _unitOfWork.bookRepository.Edit(book);
            await _unitOfWork.Save();
            return new ItemPlainResponse<BookDto>(_mapper.Map<BookDto>(book));
        }

        public async Task<ItemPlainResponse<List<BookDto>>> GetList()
        {
            List<Book> books = await _unitOfWork.bookRepository.GetList();
            List<BookDto> booksDto = _mapper.Map<List<BookDto>>(books);
            return new ItemPlainResponse<List<BookDto>>(booksDto);
        }

        public async Task<ItemsPagingResponse<List<BookDto>>> Search(string query, int page, int limit)
        {
            if (string.IsNullOrWhiteSpace(query) || query.Length < 3)
            {
                return new ItemsPagingResponse<List<BookDto>>(new List<BookDto>(), 0);
            }

            var offset = page * limit;
            var books =  await _unitOfWork.bookRepository.Search(query).ToListAsync();
            var currentBooksPage = books.Skip(offset).Take(limit);


            List<BookDto> booksDto = _mapper.Map<List<BookDto>>(currentBooksPage);
            return new ItemsPagingResponse<List<BookDto>>(booksDto, books.Count);
        }

        public async Task<BasePlainResponse> RateBook(string email, int bookId, int rate)
        {
            var user = await _unitOfWork.userRepository.CanVote(email, bookId);
            
            if (user == null)
            {
                return new BasePlainResponse
                {
                    IsSuccessful = false,
                    ErrorMessage = "User can't vote"
                };

            }
            
            await _unitOfWork.bookRepository.Vote(user.Id, bookId, rate);
            return new BasePlainResponse
            {
                IsSuccessful = true
            };
        }

        public async Task PaymentOrder(string email, int bookId)
        {
            await _unitOfWork.userRepository.ReadBook(email, bookId);
        }
    }
}
