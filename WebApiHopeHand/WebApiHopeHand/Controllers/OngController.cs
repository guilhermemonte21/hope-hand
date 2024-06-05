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
        public OngController()
        {
            ongRepository = new OngRepository();
        }
        [HttpPost("CadastrarOng")]
        public IActionResult PostOng(Ong ong)
        {
            try
            {
                Ong newong = new Ong();

                newong.Name = ong.Name;
                newong.Cnpj = ong.Cnpj;
                newong.Id = ong.Id;
                newong.Photo = ong.Photo;
                newong.Description = ong.Description;
                newong.UserId = ong.UserId;
                newong.Cnpj = ong.Cnpj;





                ongRepository.Cadastrar(ong);
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
    }
}