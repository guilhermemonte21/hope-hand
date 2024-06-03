using WebApiHopeHand.Domains;

namespace WebApiHopeHand.Interfaces
{
    public interface IEnderecoRepository
    {
        /// <summary>
        /// Cadastra um novo Endereco
        /// </summary>
        /// <param name="endereco">Objeto Endereco</param>
        /// <returns>Objeto Endereco</returns>
        public Endereco Cadastrar(Endereco endereco);

        /// <summary>
        /// Altera um Endereco existente
        /// </summary>
        /// <param name="id">Id do Endereco</param>
        /// <param name="endereco">Objeto Endereco</param>
        /// <returns>Objeto Endereco</returns>
        public Endereco AtualizarEndereco(Guid id, Endereco endereco);

        /// <summary>
        /// Busca todos endereços por cidade
        /// </summary>
        /// <param name="endereco">Nome cidade</param>
        /// <returns>Lista de objetos Endereco</returns>
        public List<Endereco> ListarPorCidade(string endereco);
    }
}
