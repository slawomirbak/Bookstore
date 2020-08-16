using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class QuestionDto
    {
        public string Sentence { get; set; }
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public string D { get; set; }
        public string Answer { get; set; }
    }
}
