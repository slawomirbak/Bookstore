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
                var response = await _bookService.Add(bookDto);
                if (response.IsSuccessful)
                {
                    return new OkObjectResult(response);
                }
                return new BadRequestObjectResult(response);
            }
            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromBody] BookDto bookDto)
        {
            if (ModelState.IsValid)
            {
                var response = await _bookService.Edit(bookDto);
                if (response.IsSuccessful)
                {
                    return new OkObjectResult(response);
                }
                return new BadRequestObjectResult(response);

            }
            return BadRequest();
        }
    }
}
