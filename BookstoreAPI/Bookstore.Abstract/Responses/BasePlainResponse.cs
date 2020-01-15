using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Responses
{
    public class BasePlainResponse
    {
        public string ErrorMessage { get; set; }
        public bool IsSuccessful { get; set; } = true;
    }
}
