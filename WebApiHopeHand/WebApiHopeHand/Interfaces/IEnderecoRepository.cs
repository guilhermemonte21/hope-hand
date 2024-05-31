using WebApiHopeHand.Domains;

namespace WebApiHopeHand.Interfaces
{
    public interface IEnderecoRepository
    {
        public void Cadastrar(Endereco endereco);
        public Endereco AtualizarEndereco(Guid id, Endereco endereco);

        public List<Endereco> ListarPorCidade(string endereco);
    }
}
