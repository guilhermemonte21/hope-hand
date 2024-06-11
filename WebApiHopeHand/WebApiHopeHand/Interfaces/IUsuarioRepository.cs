using WebApiHopeHand.Domains;

namespace WebApiHopeHand.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario Cadastrar(Usuario usuario);

        Usuario BuscarPorId(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);

        bool AlterarSenha(string email, string senhaNova);

       
    }
}
