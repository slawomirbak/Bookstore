using System;

namespace Bookstore.DataLogic.Entities
{
    public class Like: BaseEntity
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int TestId { get; set; }
        public Test Test { get; set; }
        public bool IsLike { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
