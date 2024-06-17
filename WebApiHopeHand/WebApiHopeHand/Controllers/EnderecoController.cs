using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Repositories;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnderecoController : ControllerBase
    {
        private readonly EnderecoRepository _enderecoRepository = new();

        /// <summary>
        /// Cadastra um novo Endereço
        /// </summary>
        /// <param name="addressInserted">Objeto Endereco</param>
        /// <returns>ActionResult com objeto Endereco</returns>
        [Authorize()]
        [HttpPost]
        public IActionResult Post(Endereco addressInserted)
        {
            try
            {
                Endereco enderecoRetornado = _enderecoRepository.Cadastrar(addressInserted)!;

                if (enderecoRetornado == null)
                {
                    BadRequest("Garanta que todos os campos estejam preenchidos!");
                }
                return Ok(enderecoRetornado);
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        /// <summary>
        /// Altera um Endereço existente
        /// </summary>
        /// <param name="addressInserted">Objeto Endereco</param>
        /// <returns>ActionResult com objeto Endereco</returns>
        [Authorize()]
        [HttpPut("AtualizarEndereco")]
        public IActionResult Put(Endereco addressInserted)
        {
            try
            {
                Endereco returnedAddress = _enderecoRepository.AtualizarEndereco(addressInserted.Id, addressInserted);
                return Ok(returnedAddress);
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        /// <summary>
        /// Busca todos os endereços de uma determinada Ong
        /// </summary>
        /// <param name="idOng">Id da ong da ser filtrada</param>
        /// <returns>ActionResult com lista de objetos Endereco</returns>
        [HttpGet("ListarPorOng")]
        public IActionResult GetAllByOng(Guid idOng)
        {
            try
            {
                List<Endereco> addresses = _enderecoRepository.ListarPorOng(idOng);
                return Ok(addresses);
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }
    }
}
