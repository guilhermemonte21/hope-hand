using WebApiHopeHand.Domains;
using WebApiHopeHand.ViewModel;


namespace WebApiHopeHand.Interfaces
{
    public interface IOngRepository
    {
        public void Cadastrar(Endereco endereco);

        public void Deletar(Guid id);

        public List<OngEnderecoViewModel> Listar();

        public OngEnderecoViewModel BuscarPorId(Guid id);
    }
}
