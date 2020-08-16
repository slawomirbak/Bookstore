using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class BookRatingDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int Rating { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
