using System;
using System.Collections.Generic;

namespace Bookstore.Abstract.Contracts
{
    public class TestDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public ICollection<LikeDto> Likes { get; set; }
        public ICollection<QuestionDto> Questions { get; set; }
        public int NumberOfQuestions { get; set; }
        public string Author { get; set; }
    }
}
