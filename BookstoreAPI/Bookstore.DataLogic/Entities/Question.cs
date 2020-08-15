using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Question : BaseEntity
    {
        public string Sentence { get; set; }
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public string D { get; set; }
        public string Answer { get; set; }
        public Test Test { get; set; }
    }
}
