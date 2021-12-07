using System.Threading.Tasks;
using Bookstore.Abstract.Contracts;
using Bookstore.Abstract.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto userDto)
        {
            if (ModelState.IsValid)
            {
                var errorResponse = await _userService.Add(userDto);
                if (!errorResponse.IsSuccessful) return new BadRequestObjectResult(errorResponse.ErrorMessage);
                return new OkObjectResult(errorResponse);
            }

            return BadRequest();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] CredentialDto credentials)
        {
            if (ModelState.IsValid)
            {
                var response = await _userService.Login(credentials);
                if (!response.IsSuccessful) return new BadRequestObjectResult(response.ErrorMessage);
                return new OkObjectResult(response);
            }

            return BadRequest();
        }

        [HttpGet("private")]
        [Authorize]
        public IActionResult Private()
        {
            return new OkObjectResult("ok");
        }

        [HttpPost("refresh")]
        public async Task<ActionResult> Refresh([FromBody] TokensDto tokens)
        {
            if (!string.IsNullOrEmpty(tokens.refreshToken))
            {
                var response = await _userService.GetTokens(tokens.refreshToken);
                if (!response.IsSuccessful) return new BadRequestObjectResult(response.ErrorMessage);
                return new OkObjectResult(response);
            }

            return BadRequest();
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout([FromBody] TokensDto tokens)
        {
            if (!string.IsNullOrEmpty(tokens.refreshToken))
            {
                var response = await _userService.Logout(tokens.refreshToken);
                if (!response.IsSuccessful) return new BadRequestObjectResult(response.ErrorMessage);
                return new OkObjectResult(response);
            }

            return BadRequest();
        }
    }
}