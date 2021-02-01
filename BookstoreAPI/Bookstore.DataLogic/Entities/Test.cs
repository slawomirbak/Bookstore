using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Test : BaseEntity
    {
        public DateTime CreateDate { get; set; }
        public int Likes { get; set; }
        public int Dislike { get; set; }
        public ICollection<Question> Questions { get;set;}
        public int NumberOfQuestions { get; set; }
        public Book Book { get; set; }
    }
}
