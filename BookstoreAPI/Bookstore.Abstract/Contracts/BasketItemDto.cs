using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class BasketItemDto
    {
        public BookDto Book { get; set; }
        public int Amount { get; set; }
        public decimal TotalPrice { get; set; }
        public BookFormatDto BookFormatDto { get; set; }
    }
}
