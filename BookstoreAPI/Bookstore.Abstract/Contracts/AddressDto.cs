using System;
using System.Collections.Generic;
using System.Text;

namespace Bookstore.Abstract.Contracts
{
    public class AddressDto
    {
        public string Country { get; set; }
        public string City { get; set; }
        public string StreetAddress { get; set; }
        public string PostCode { get; set; }
    }
}
