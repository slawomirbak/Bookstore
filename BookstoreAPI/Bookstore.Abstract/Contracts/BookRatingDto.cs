using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class BookRatingDto
    {
        public string UserName { get; set; }
        public int Rating { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
