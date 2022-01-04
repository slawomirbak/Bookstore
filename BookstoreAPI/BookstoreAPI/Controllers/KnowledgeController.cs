using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Bookstore.Abstract.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

namespace BookstoreAPI.Controllers
{
    [Route("api/[controller]")]
    public class KnowledgeController : ControllerBase
    {
        private readonly IKnowledgeService _knowledgeService;
        private readonly IBookService _bookService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public KnowledgeController(IKnowledgeService knowledgeService,
            IBookService bookService,
            IHttpContextAccessor httpContextAccessor)
        {
            _knowledgeService = knowledgeService;
            _bookService = bookService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpPost("new/{bookId}")]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] TestDto testDto, int bookId)
        {
            var userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email)
                .Value;

            if (string.IsNullOrWhiteSpace(userEmail))
            {
                var userNotFound = new BasePlainResponse()
                {
                    IsSuccessful = false,
                    ErrorMessage = "User not found"
                };

                return new BadRequestObjectResult(userNotFound);
            }

            var response = await _knowledgeService.CreateTest(testDto, userEmail, bookId);

            return new OkObjectResult(response);
        }

        [HttpGet("{bookId}")]
        [Authorize]
        public async Task<IActionResult> GetList(int bookId)
        {

            var response = await _knowledgeService.GetTests(bookId);

            return new OkObjectResult(response);
        }

        [HttpGet("test/{testId}")]
        public async Task<IActionResult> GetTest(int testId)
        {
            var response = await _knowledgeService.GetTest(testId);

            return new OkObjectResult(response);
        }

        [HttpPost("like")]
        [Authorize]
        public async Task<IActionResult> LikeTest ([FromBody] LikeDto like)
        {
            var userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email)
               .Value;

            if (string.IsNullOrWhiteSpace(userEmail))
            {
                var userNotFound = new BasePlainResponse()
                {
                    IsSuccessful = false,
                    ErrorMessage = "User not found"
                };

                return new BadRequestObjectResult(userNotFound);
            }

            var response = await _knowledgeService.LikeTest(like, userEmail);

            return new OkObjectResult(response);
        }


        [HttpPost("checkTest")]
        [Authorize]
        public async Task<IActionResult> LikeTest([FromBody] TestDto testDto)
        {
            var userEmail = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email)
               .Value;

            if (string.IsNullOrWhiteSpace(userEmail))
            {
                var userNotFound = new BasePlainResponse()
                {
                    IsSuccessful = false,
                    ErrorMessage = "User not found"
                };

                return new BadRequestObjectResult(userNotFound);
            }

            var response = await _knowledgeService.CheckTest(testDto);

            return new OkObjectResult(response);
        }
    }
}
