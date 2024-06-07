using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Repositories;
using WebApiHopeHand.Utils.BlobStorage;
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

        [Authorize()]
        [HttpPost("CadastrarOng")]
        public async Task<IActionResult> PostOng([FromForm] CadastroOngEnderecoViewModel novaOng)
        {
            try
            {
                Ong newOng = new Ong()
                {
                    Name = novaOng.Name,
                    Cnpj = novaOng.Cnpj,
                    Photo = novaOng.Photo,
                    Description = novaOng.Description,
                    Arquivo = novaOng.Arquivo,
                    Link = novaOng.Link,
                    UserId = novaOng.UserId,
                };

                Endereco newOngAddress = new Endereco()
                {
                    Address = novaOng.Address,
                    Cep = novaOng.Cep,
                    Number = novaOng.Number,
                    City = novaOng.City,
                    State = novaOng.State,
                };

                return null;


                //Ong newong = new Ong();

                //newong.Name = novaOng.Ong.Name;
                //newong.Cnpj = novaOng.Ong.Cnpj;
                //newong.Photo = novaOng.Ong.Photo;
                //newong.Description = novaOng.Ong.Description;
                //newong.UserId = novaOng.Ong.UserId;
                //newong.Cnpj = novaOng.Ong.Cnpj;
                //newong.Link = novaOng.Ong.Link;


                //Endereco ongEndereco = new Endereco();

                //ongEndereco.Address = novaOng.Address;
                //ongEndereco.Cep = novaOng.Cep;
                //ongEndereco.Number = novaOng.Number;
                //ongEndereco.City = novaOng.City;
                //ongEndereco.State = novaOng.State;


                //ongEndereco.Ong = new Ong
                //{
                //    Name = novaOng.Ong.Name,
                //    Cnpj = novaOng.Ong.Cnpj,
                //    Link = novaOng.Ong.Link,
                //    Photo = novaOng.Ong.Photo,
                //    Description = novaOng.Ong.Description,
                //    UserId = novaOng.Ong.UserId,
                //};

                //// Liga a ONG ao Endereco
                //ongEndereco.IdOng = ongEndereco.Ong.Id;

                //enderecoRepository.Cadastrar(ongEndereco);

                //return Ok("ONG Cadastrada com sucesso!");


                // ____________________ OPÇÃO DOOOOOOOOOOOOOOOOOOOOIS ____________________


                ////define o nome do container do blob
                //var containerName = "hopehandcontainer";

                ////define a string de conexão
                //var connectionString = "DefaultEndpointsProtocol=https;AccountName=hopehandarmazenamento;AccountKey=x174GS2yRKB6v9tZ/mRkHspQRhUhCl0L1DzxkeX0MIl55pJEs6arJml8Kg2KuRElMBkisTHSBw87+AStnsXnPg==;EndpointSuffix=core.windows.net";

                ////aqui vamos chamar o método para upload da imagem
                //newong.Photo = await AzureBlobStorageHelper.UploadImageBlobAsync(novaOng.Ong.Arquivo!, connectionString, containerName);

                //ongRepository.Cadastrar(newong);
                //enderecoRepository.Cadastrar(endereco);

                //return Ok(newong);


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