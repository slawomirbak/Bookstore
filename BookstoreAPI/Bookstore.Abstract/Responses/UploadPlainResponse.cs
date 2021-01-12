using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Responses
{
    public class UploadPlainResponse: BasePlainResponse
    {
        public string fileName { get; set; }
    }
}
