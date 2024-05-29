using ApiHopeHand.Domains;
using ApiHopeHand.Interfaces;

namespace ApiHopeHand.Repositories
{
    public class EnderecoRepository : IEnderecoRepository
    {
        public EnderecoDomain AtualizarEndereco(Guid id, EnderecoDomain endereco)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(EnderecoDomain endereco)
        {
            throw new NotImplementedException();
        }

        public List<EnderecoDomain> ListarPorCidade(string endereco)
        {
            throw new NotImplementedException();
        }
    }
}
