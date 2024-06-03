using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Domains;
using Microsoft.AspNetCore.Http.HttpResults;

namespace WebApiHopeHand.Repositories
{
    public class OngRepository : IOngRepository
    {
        public Ong BuscarPorId(Guid id)
        {
            try
            {
                return null;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(Ong ong)
        {
            throw new NotImplementedException();
        }

        public void Deletar(Ong ong)
        {
            throw new NotImplementedException();
        }

        public List<Ong> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
