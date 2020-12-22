using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{

    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] BookDto bookDto)
        {
            if (ModelState.IsValid)
            {
            }
            return BadRequest();
        }
    }
}
