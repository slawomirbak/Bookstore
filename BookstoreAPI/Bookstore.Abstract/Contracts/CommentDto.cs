using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedDate { get; set; }
        public int Likes { get; set; }
        public int Dislike { get; set; }
        public string Description { get; set; }
    }
}
