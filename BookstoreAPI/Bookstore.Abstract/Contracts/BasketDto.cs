using System.Collections.Generic;

namespace Bookstore.Abstract.Contracts
{
    public class BasketDto
    {
        public List<BasketItemDto> BasketItems { get; set; }
        public decimal TotalPrice { get; set; }
        public string Delivery { get; set; }
        public string Payment { get; set; }
        public string Address { get; set; }
    }
}