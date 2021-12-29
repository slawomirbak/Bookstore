using Bookstore.DataLogic.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.UserRepository
{
    public class UserRepository: BaseRepository<User>, IUserRepository
    {
        public UserRepository(DefaultContext defaultContext): base(defaultContext)
        {
                
        }
        public async Task<bool> IsEmailExist(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email.Trim());
        }
        public async Task<User> GetByEmail(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task SaveRefreshToken(RefreshToken refreshToke)
        {
            await _context.RefreshTokens.AddAsync(refreshToke);
        }

        public async Task<RefreshToken> GetRefreshToken(string token)
        {
            return await _context.RefreshTokens.Include(rt => rt.User).FirstOrDefaultAsync(rt => rt.Token == token);
        }

        public async Task UpdateRefreshToken(RefreshToken token)
        {
            var refreshToken = await GetRefreshToken(token.Token);
            if (refreshToken != null) _context.RefreshTokens.Update(refreshToken);
        }

        public async Task RemoveRefreshToken(string token)
        {
            var refreshToken = await GetRefreshToken(token);
            if (refreshToken != null) _context.RefreshTokens.Remove(refreshToken);
        }

        public async Task Create(User user)
        {
            await _context.Users.AddAsync(user);
        }

        public async Task<User> CanVote(string email, int bookId)
        {
            var user = await _context.Users.Include(user => user.BookRead)
                .ThenInclude(bookRead => bookRead.Book)
                .FirstOrDefaultAsync(u => u.Email == email.Trim());
            var readBook = user.BookRead.Any(book => book.BookId == bookId);

            if (readBook)
            {
                return user;
            }

            return null;
        }

        public async Task ReadBook(string email, int bookId)
        {
            var user = await _context.Users.Include(user => user.BookRead)
                .ThenInclude(bookRead => bookRead.Book)
                .FirstOrDefaultAsync(u => u.Email == email.Trim());

            if (user.BookRead.Any(book => book.BookId == bookId))
            {
                return;
            }

            var book = await _context.Books.FirstOrDefaultAsync(book => book.Id == bookId);
            user.BookRead.Add(new BookRead { Book = book, User = user});
            await _context.SaveChangesAsync();
        }
    }
}
