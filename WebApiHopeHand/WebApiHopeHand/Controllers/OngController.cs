using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Repositories;
using WebApiHopeHand.ViewModel;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OngController : ControllerBase
    {
        private IOngRepository ongRepository { get; set; }
        private IEnderecoRepository enderecoRepository { get; set; }
        public OngController()
        {
            ongRepository = new OngRepository();
            enderecoRepository = new EnderecoRepository();
        }
        [HttpPost("CadastrarOng")]
        public IActionResult PostOng(OngEnderecoViewModel novaOng)
        {
            try
            {
                Ong newong = new Ong();

                newong.Name = novaOng.Ong.Name;
                newong.Cnpj = novaOng.Ong.Cnpj;
                newong.Photo = novaOng.Ong.Photo;
                newong.Description = novaOng.Ong.Description;
                newong.UserId = novaOng.Ong.UserId;
                newong.Cnpj = novaOng.Ong.Cnpj;
                newong.Link = novaOng.Ong.Link;


                Endereco endereco = new Endereco();

                endereco.Address = novaOng.Endereco.Address;
                endereco.Cep = novaOng.Endereco.Cep;
                endereco.Number = novaOng.Endereco.Number;
                endereco.City = novaOng.Endereco.City;
                endereco.State = novaOng.Endereco.State;
                endereco.IdOng = newong.Id;



                ongRepository.Cadastrar(newong);
                enderecoRepository.Cadastrar(endereco);

                return Ok(newong);


            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet("Listar")]
        public IActionResult Get()
        {
            try
            {
                return Ok(ongRepository.Listar());

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
                return Ok(ongRepository.BuscarPorId(id));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("DeletarOng")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                ongRepository.Deletar(id);
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}