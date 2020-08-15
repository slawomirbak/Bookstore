using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Comment: BaseEntity
    {
        public string UserName { get; set; }
        public DateTime CreatedDate { get; set; }
        public int Likes { get; set; }
        public int Dislike { get; set; }
        public string Description { get; set; }
        public Book Book { get; set; }
    }
}
