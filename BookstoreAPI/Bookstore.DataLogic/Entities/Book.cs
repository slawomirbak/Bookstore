using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class Book: BaseEntity
    {
        public string Title { get; set; }
        public string AuthorAvatar { get; set; }
        public string Img { get; set; }
        public string Author { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Discount { get; set; }
        public string ShortDescription { get; set; }
        public int Format { get; set; }
    }
}
