using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IService;
using Bookstore.Abstract.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorService _authorService;

        private readonly IUploadService _uploadService;
        public AuthorsController(IAuthorService authorService, IUploadService uploadService)
        {
            _authorService = authorService;
            _uploadService = uploadService;
        }

        [HttpGet]
        public async Task<IActionResult> Getall()
        {
            var response = await _authorService.GetList();
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }
            return new BadRequestObjectResult(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = await _authorService.GetById(id);
            if (response.IsSuccessful)
            {
                return new OkObjectResult(response);
            }
            return new BadRequestObjectResult(response);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromBody] AuthorDto authorDto)
        {
            if (ModelState.IsValid)
            {
                var response = await _authorService.Edit(authorDto);
                if (response.IsSuccessful)
                {
                    return new OkObjectResult(response);
                }
                return new BadRequestObjectResult(response);

            }
            return BadRequest();
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

        [HttpPost("upload/{id}")]
        public async Task<IActionResult> Upload(int id)
        {
            var file = Request.Form.Files[0];
            if (!file.ContentType.Contains("image") || id == 0)
            {
                return BadRequest();
            }
            
            var uploadReponse = await _uploadService.UploadFile(file);
           
            if(uploadReponse.IsSuccessful)
            {
                var fileName = uploadReponse.fileName;
                var currentFileName = await _authorService.GetById(id);
                if(!String.IsNullOrWhiteSpace(currentFileName.Data.AuthorAvatar))
                {
                    await _uploadService.DeleteImage(currentFileName.Data.AuthorAvatar);
                }
                var response = await _authorService.EditProperty(id, "AuthorAvatar", fileName);

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
