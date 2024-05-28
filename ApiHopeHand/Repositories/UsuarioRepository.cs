using ApiHopeHand.Domains;
using ApiHopeHand.Interfaces;

namespace ApiHopeHand.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public bool AlterarSenha(string email, string senhaNova)
        {
            throw new NotImplementedException();
        }

        public void AtualizarFoto(Guid id, string novaUrlFoto)
        {
            throw new NotImplementedException();
        }

        public UsuarioDomain BuscarPorEmailESenha(string email, string senha)
        {
            throw new NotImplementedException();
        }

        public UsuarioDomain BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(UsuarioDomain usuario)
        {
            throw new NotImplementedException();
        }
    }
}
