using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Author: BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string AuthorAvatar { get; set; }
        public ICollection<BookAuthor> Book { get; set; }
    }
}
