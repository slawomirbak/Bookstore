using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{

    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;
        private readonly IUploadService _uploadService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public BooksController(IBookService bookService, IUploadService uploadService,
            IHttpContextAccessor httpContextAccessor)
        {
            _bookService = bookService;
            _uploadService = uploadService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var response = await _bookService.GetList();
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }

            return new BadRequestObjectResult(response);
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = await _bookService.GetById(id);
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }

            return new BadRequestObjectResult(response);

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

        [HttpPost("upload/{id}")]
        public async Task<IActionResult> Upload(int id)
        {
            var file = Request.Form.Files[0];
            if (!file.ContentType.Contains("image") || id == 0)
            {
                return BadRequest();
            }

            var uploadPlainResponse = await _uploadService.UploadFile(file);

            if (uploadPlainResponse.IsSuccessful)
            {
                var fileName = uploadPlainResponse.fileName;
                var currentFileName = await _bookService.GetById(id);
                if (!String.IsNullOrWhiteSpace(currentFileName.Data.Img))
                {
                    await _uploadService.DeleteImage(currentFileName.Data.Img);
                }

                var response = await _bookService.EditProperty(id, "Img", fileName);

                if (response.IsSuccessful)
                {
                    return new OkObjectResult(response);
                }

                return new BadRequestObjectResult(response);
            }

            return BadRequest();
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search([FromQuery(Name = "query")] string query,
            [FromQuery(Name = "page")] int page, [FromQuery(Name = "limit")] int limit)
        {
            var response = await _bookService.Search(query, page, limit);
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }

            return new BadRequestObjectResult(response);
        }

        [HttpGet("rate/{id}")]
        [Authorize]
        public async Task<IActionResult> Rate(int id, [FromQuery(Name = "rate")] int rate)
        {
            if (string.IsNullOrWhiteSpace(_httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email)
                .Value))
            {
                var userNotFound = new BasePlainResponse()
                {
                    IsSuccessful = false,
                    ErrorMessage = "User not found"
                };

                return new BadRequestObjectResult(userNotFound);
            }

            var response = await _bookService.RateBook(id, rate);
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }

            return new BadRequestObjectResult(response);
        }

        [HttpPost("comment")]
        public async Task<IActionResult> Comment()
        {
            // var response = await _bookService.Search(query, page, limit);
            // if (response.IsSuccessful)
            // {
            //     return new OkObjectResult(response);
            // }
            // return new BadRequestObjectResult(response);

            return null;
        }
    }
}
