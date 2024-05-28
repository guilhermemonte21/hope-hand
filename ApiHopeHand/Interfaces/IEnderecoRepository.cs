using ApiHopeHand.Domains;

namespace ApiHopeHand.Interfaces
{
    public interface IEnderecoRepository
    {
        public void Cadastrar(EnderecoDomain endereco);
        public EnderecoDomain AtualizarEndereco(Guid id, EnderecoDomain endereco);

        public List<EnderecoDomain> ListarPorCidade(string endereco);
    }
}
