using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Bookstore.DataLogic.Repository.BookRepository
{
    public class BookRepository: BaseRepository<Book>, IBookRepository
    {
        public BookRepository(DefaultContext defaultContext): base(defaultContext)
        {
        }
        public async Task Create(Book book)
        {
            await _context.Books.AddAsync(book);
        }

        public void Edit(Book book)
        {
            _context.Books.Update(book);

        }

        public async Task<Book> GetById(int id)
        {
            return await _context.Books
                .Include(b => b.Author).ThenInclude(x => x.Author)
                .Include(b => b.BookFormats)
                .Include(b => b.BookRatings)
                .Include(b => b.BookRead).ThenInclude(br => br.User)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task AddBookAuthor(BookAuthor bookAuthor)
        {
            await _context.BookAuthor.AddAsync(bookAuthor);
        }

        public void RemoveBookAuthor(BookAuthor bookAuthor)
        {
            _context.BookAuthor.Remove(bookAuthor);
        }

        public async Task<List<Book>> GetList()
        {
            return await _context.Books.Include(book => book.Author).ThenInclude(a=> a.Author).ToListAsync();
        }

        public IQueryable<Book> Search(string query)
        {
            return _context.Books
                .Include(book => book.Author)
                .ThenInclude(a => a.Author)
                .Where(book => book.Title.ToLower().Contains(query.ToLower()) ||
                               book.Author.Any(author => author.Author.Name.ToLower().Contains(query.ToLower())) ||
                               book.Author.Any(author => author.Author.Surname.ToLower().Contains(query.ToLower())));
        }

        public async Task Vote(int userId, int bookId, int rate)
        {
            var book = await this.GetById(bookId);


            var voted = book.BookRatings.FirstOrDefault(bookRating => bookRating.Book.Id == bookId);

            if (voted != null)
            {
                voted.Rating = rate;
                voted.CreateDate = DateTime.Now;
            }
            else
            {
                var bookRating = new BookRating()
                {
                    Book = book,
                    CreateDate = DateTime.Now,
                    Rating = rate,
                    UserId = userId
                };
                book.BookRatings.Add(bookRating);
            }

            book.AverageRating = (float)book.BookRatings.Average(bookRating => bookRating.Rating);

            await _context.SaveChangesAsync();
        }
    }
}
