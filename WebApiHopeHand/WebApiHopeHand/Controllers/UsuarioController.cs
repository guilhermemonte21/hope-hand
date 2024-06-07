using Microsoft.AspNetCore.Authorization;
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
        public IActionResult Post(Usuario usuario)
        {
            try
            {
                // Objeto a ser cadastrado
                Usuario user = new()
                {
                    // Recebe os valores e preenche as propriedades do objeto
                    Name = usuario.Name,
                    Email = usuario.Email,
                    Password = usuario.Password,
                    Cpf = usuario.Cpf,
                    Rg = usuario.Rg,
                    Birth = usuario.Birth,
                    CodRecupSenha = usuario.CodRecupSenha
                };

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
                return Ok(usuarioRepository.BuscarPorEmailESenha(email, password));
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}

