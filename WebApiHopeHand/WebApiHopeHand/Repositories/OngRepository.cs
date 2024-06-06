using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Domains;
using Microsoft.AspNetCore.Http.HttpResults;
using WebApiHopeHand.Context;
using Microsoft.EntityFrameworkCore;
using WebApiHopeHand.ViewModel;
using System.Runtime.Serialization;

namespace WebApiHopeHand.Repositories
{
    public class OngRepository : IOngRepository
    {
        private HopeContext _context = new HopeContext();
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
            _context.Ongs.Add(ong);
            _context.SaveChanges();
        }

        public void Deletar(Ong ong)
        {
            throw new NotImplementedException();
        }

        public List<OngEnderecoViewModel> Listar()
        {
            List<OngEnderecoViewModel> ongEnderecos = [];

            List<Ong>? ongList = _context.Ongs.ToList();

            foreach (var item in ongList)
            {
                // Insere uma ong da lista
                ongEnderecos.Add(new OngEnderecoViewModel
                {
                    Ong = item
                });
            }



            //await _context.Ongs.ForEachAsync(o => ongEnderecos.Add(new OngEnderecoViewModel
            //{
            //    Ong = new Ong
            //    {
            //        Name = o.Name,
            //        Cnpj = o.Cnpj,
            //        Description = o.Description,
            //        Id = o.Id,
            //        Photo = o.Photo,
            //        UserId = o.UserId,

            //    }

            //}));
            //ongEnderecos.ForEach(o =>
            //{
            //    o.Endereco = _context.Enderecos.FirstOrDefault(x => x.IdOng == o.Ong.Id);

            //});
            return ongEnderecos;
        }
    }
}
