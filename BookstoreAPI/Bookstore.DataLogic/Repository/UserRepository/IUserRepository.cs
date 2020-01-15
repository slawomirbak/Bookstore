using Bookstore.DataLogic.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.DataLogic.Repository.UserRepository
{
    public interface IUserRepository
    {
        Task Create(User entity);
        Task<bool> IsEmailExist(string email);
        Task<User> GetByEmail(string email);
        Task SaveRereshToken(RefreshToken refreshToke);
        Task<RefreshToken> GetRefreshToken(string token);
        Task UpdateRefreshToken(RefreshToken token);
        Task RemoveRefreshToken(string token);
    }
}
