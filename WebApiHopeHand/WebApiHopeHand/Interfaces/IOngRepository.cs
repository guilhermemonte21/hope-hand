using WebApiHopeHand.Domains;
using WebApiHopeHand.ViewModel;


namespace WebApiHopeHand.Interfaces
{
    public interface IOngRepository
    {
        public void Cadastrar(Ong ong);

        public void Deletar(Guid id);
        public void EditarOng(AlterarOngViewModel ong);

        public List<OngEnderecoViewModel> Listar();

        public OngEnderecoViewModel BuscarPorId(Guid id);

        public void AlterarFoto(Guid idOng, string newPhotoUri);
    }
}
