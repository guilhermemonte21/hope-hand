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

        /// <summary>
        /// Realiza o cadastro de uma nova ONG com seu respectivo Endereço
        /// </summary>
        /// <param name="ongInserted">Objeto CadastroOngEnderecoViewModel</param>
        /// <returns>StatusCode</returns>
        [Authorize()]
        [HttpPost("CadastrarOng")]
        public async Task<IActionResult> PostOng([FromForm] CadastroOngEnderecoViewModel ongInserted)
        {
            try
            {
                // Pega os valores da ONG
                Ong newOng = new()
                {
                    Name = ongInserted.Name,
                    Cnpj = ongInserted.Cnpj,
                    Photo = ongInserted.Photo,
                    Description = ongInserted.Description,
                    Arquivo = ongInserted.Arquivo,
                    Link = ongInserted.Link,
                    UserId = ongInserted.UserId,
                };

                // Pega os valores do endereço da ONG
                Endereco newOngAddress = new Endereco()
                {
                    Address = ongInserted.Address,
                    Cep = ongInserted.Cep,
                    Number = ongInserted.Number,
                    City = ongInserted.City,
                    State = ongInserted.State,
                    IdOng = newOng.Id
                };

                //define o nome do container do blob
                var containerName = "hopehandcontainer";

                //define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=hopehandarmazenamento;AccountKey=x174GS2yRKB6v9tZ/mRkHspQRhUhCl0L1DzxkeX0MIl55pJEs6arJml8Kg2KuRElMBkisTHSBw87+AStnsXnPg==;EndpointSuffix=core.windows.net";

                //aqui vamos chamar o método para upload da imagem
                newOng.Photo = await AzureBlobStorageHelper.UploadImageBlobAsync(newOng.Arquivo!, connectionString, containerName);

                // Cadastra a ONG
                ongRepository.Cadastrar(newOng);
                // Cadastra o Endereço da ONG
                enderecoRepository.Cadastrar(newOngAddress);

                return Ok("ONG cadastrada com sucesso!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Retorna todas as ONGs do banco
        /// </summary>
        /// <returns>Lista de objetos tipo Ong</returns>
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

        /// <summary>
        /// Busca uma ong por ID
        /// </summary>
        /// <param name="id">Id da ONG</param>
        /// <returns>StatusCode</returns>
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

        /// <summary>
        /// Deleta uma ONG do banco por Id
        /// </summary>
        /// <param name="id">Id da ONG</param>
        /// <returns>StatusCode</returns>
        [Authorize()]
        [HttpDelete("DeletarOng")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                ongRepository.Deletar(id);
                return Ok("ONG");
            }
            catch (Exception)
            {

                throw;
            }
        }

        [Authorize()]
        [HttpPut("Editar")]
        public IActionResult Put(OngEnderecoViewModel ong)
        {
            try
            {
                ongRepository.EditarOng(ong);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        /// <summary>
        /// Altera uma ONG do banco
        /// </summary>
        /// <param name="photoViewModel">ChangePhotoViewModel(IdOng, Arquivo)</param>
        /// <returns>StatusCode/uriFotoSalvaAzure</returns>
        [Authorize()]
        [HttpPut("AlterarFoto")]
        public async Task<IActionResult> PutPhoto([FromForm] ChangePhotoViewModel photoViewModel)
        {
            try
            {
                var searchedOng = ongRepository.BuscarPorId(photoViewModel.IdOng);

                if (searchedOng == null)
                {
                    return NotFound();
                }

                // Lógica para o upload de imagem
                //define o nome do container do blob
                var containerName = "hopehandcontainer";

                //define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=hopehandarmazenamento;AccountKey=x174GS2yRKB6v9tZ/mRkHspQRhUhCl0L1DzxkeX0MIl55pJEs6arJml8Kg2KuRElMBkisTHSBw87+AStnsXnPg==;EndpointSuffix=core.windows.net";

                // Realiza o upload de imagem e guarda a url da imagem na variável
                string photoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(photoViewModel.Arquivo!, connectionString, containerName);
                // Fim da lógica para upload de imagem

                ongRepository.AlterarFoto(photoViewModel.IdOng, photoUrl!);

                return Ok(photoUrl);
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

    }
}