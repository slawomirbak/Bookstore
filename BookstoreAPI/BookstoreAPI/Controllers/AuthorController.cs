using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorService _authorService;
        public AuthorsController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpPost("")]
        public async Task<IActionResult> Add([FromBody] AuthorDto authorDto)
        {
            if (ModelState.IsValid)
            {
                var response = await _authorService.Add(authorDto);
                if(response.IsSuccessful)
                {
                    return new OkObjectResult(response);
                }
                return new BadRequestObjectResult(response);
            }
            return BadRequest();
        }

    }
}
