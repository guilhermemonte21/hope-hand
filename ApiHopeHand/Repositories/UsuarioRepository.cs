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

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            throw new NotImplementedException();
        }

        public Usuario BuscarPorId(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Usuario usuario)
        {
            throw new NotImplementedException();
        }
    }
}
