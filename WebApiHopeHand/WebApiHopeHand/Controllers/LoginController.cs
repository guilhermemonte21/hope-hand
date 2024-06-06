using Microsoft.AspNetCore.Mvc;
using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Repositories;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _userRepository;


        public LoginController()
        {
            _userRepository = new UsuarioRepository();
        }


        //[HttpPost]
        //public IActionResult Post()
        //{
        //    try
        //    {

        //    }
        //    catch (Exception exc)
        //    {
        //        return BadRequest(exc.Message);
        //    }
        //}

    }
}