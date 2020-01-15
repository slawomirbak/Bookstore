using Bookstore.DataLogic.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task SaveRereshToken(RefreshToken refreshToke)
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
    }
}
