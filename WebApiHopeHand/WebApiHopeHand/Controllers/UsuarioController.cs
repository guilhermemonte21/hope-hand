using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Repositories;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        public UsuarioController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        [HttpPut("AlterarSenha")]
        public IActionResult UpdatePassword(string email, string password) 
        {
            try
            {
                usuarioRepository.AlterarSenha(email, password);

                return Ok("Senha alterada com sucesso !");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult GetById(Guid id) 
        {
            try
            {
                return Ok(usuarioRepository.BuscarPorId(id));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpPost("CriarConta")]
        public IActionResult Post (Usuario usuario) 
        {
            try
            {
                // Objeto a ser cadastrado
                Usuario user = new Usuario();

                // Recebe os valores e preenche as propriedades do objeto
                user.Name = usuario.Name;
                user.Email = usuario.Email;
                user.Password = usuario.Password;
                user.Cpf = usuario.Cpf;
                user.Rg = usuario.Rg;
                user.Birth = usuario.Birth;

                //cadastra o usuario
                usuarioRepository.Cadastrar(user);
                return Ok();


            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet("BuscarPorEmailESenha")]
        public IActionResult GetByEmailAndPassword(string email, string password)
        {
            try
            {
                return Ok(usuarioRepository.BuscarPorEmailESenha(email,password));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
    }

