using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class TokensDto
    {
        public string Jwt { get; set; }
        public string refreshToken { get; set; }
        public UserInfoDto user { get; set; }
    }
}
