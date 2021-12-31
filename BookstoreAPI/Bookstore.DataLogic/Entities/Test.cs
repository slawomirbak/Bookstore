using System;
using System.Collections.Generic;

namespace Bookstore.DataLogic.Entities
{
    public class Test : BaseEntity
    {
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public ICollection<Like> Likes { get; set; }
        public ICollection<Question> Questions { get;set;}
        public int NumberOfQuestions { get; set; }
        public Book Book { get; set; }
        public User User { get; set; }
    }
}
