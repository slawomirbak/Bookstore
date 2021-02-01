using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class BookRating : BaseEntity
    {
        public string UserName { get; set; }
        public int Rating { get; set; }
        public DateTime CreateDate { get; set; }
        public Book Book { get; set; }
    }
}
