using ApiHopeHand.Domains;

namespace ApiHopeHand.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(UsuarioDomain usuario);

        UsuarioDomain BuscarPorId(Guid id);

        UsuarioDomain BuscarPorEmailESenha(string email, string senha);

        bool AlterarSenha(string email, string senhaNova);

        public void AtualizarFoto(Guid id, string novaUrlFoto);
    }
}
