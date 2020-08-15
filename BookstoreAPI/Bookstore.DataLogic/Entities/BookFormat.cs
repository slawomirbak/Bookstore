using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Bookstore.DataLogic.Entities
{
    public class BookFormat: BaseEntity
    {
        public int Quantity { get; set; }
        public string Format { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Discount { get; set; }
        public Book Book { get; set; }
    }
}
