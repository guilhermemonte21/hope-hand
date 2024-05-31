using WebApiHopeHand.Domains;


namespace WebApiHopeHand.Interfaces
{
    public interface IOngRepository
    {
        public void Cadastrar(Ong ong);

        public void Deletar(Ong ong);

        public List<Ong> Listar();

        public Ong BuscarPorId(Guid id);
    }
}
