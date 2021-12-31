using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class LikeDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int TestId { get; set; }
        public bool IsLike { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
