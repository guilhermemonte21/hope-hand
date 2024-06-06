using WebApiHopeHand.Domains;
using WebApiHopeHand.ViewModel;


namespace WebApiHopeHand.Interfaces
{
    public interface IOngRepository
    {
        public void Cadastrar(Ong ong);

        public void Deletar(Ong ong);

        public List<OngEnderecoViewModel> Listar();

        public Ong BuscarPorId(Guid id);
    }
}
