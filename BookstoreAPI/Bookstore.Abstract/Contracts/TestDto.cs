using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class TestDto
    {
        public DateTime CreateDate { get; set; }
        public int Likes { get; set; }
        public int Dislike { get; set; }
        public ICollection<QuestionDto> Questions { get; set; }
        public int NumberOfQuestions { get; set; }
    }
}
