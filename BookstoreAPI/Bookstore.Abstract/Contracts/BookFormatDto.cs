using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class BookFormatDto
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public string Format { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Discount { get; set; }
    }
}
