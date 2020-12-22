using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Responses
{
    public class ItemPlainResponse<T>: BasePlainResponse
    {
        public T Data { get; set; }

        public ItemPlainResponse(T data)
        {
            this.Data = data;
        }
    }
}
