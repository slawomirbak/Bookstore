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
        private readonly IUploadService _uploadService;

        public BooksController(IBookService bookService, IUploadService uploadService)
        {
            _bookService = bookService;
            _uploadService = uploadService;
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

        [HttpGet("search/{query}")]
        public async Task<IActionResult> Search(string query)
        {
            var response = await _bookService.Search(query);
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }
            return new BadRequestObjectResult(response);
        }
    }
}
