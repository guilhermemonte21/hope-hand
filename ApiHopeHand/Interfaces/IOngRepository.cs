using ApiHopeHand.Domains;


namespace ApiHopeHand.Interfaces
{
    public interface IOngRepository
    {
        public void Cadastrar(OngDomain ong);

        public void Deletar(OngDomain ong);

        public List<OngDomain> Listar();

        public OngDomain BuscarPorId(Guid id);
    }
}
