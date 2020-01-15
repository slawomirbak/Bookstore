using Bookstore.Abstract.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Responses
{
    public class LoginPlainResponse: BasePlainResponse
    {
        public TokensDto Data { get; set; }
    }
}
