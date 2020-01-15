using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.Responses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Abstract.IServices
{
    public interface IUserService
    {
        Task<BasePlainResponse> Add(UserDto userDto);
        Task<LoginPlainResponse> Login(CredentialDto credentials);
        Task<LoginPlainResponse> GetTokens(string token);
        Task<LoginPlainResponse> Logout(string token);
    }
}
