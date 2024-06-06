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
        public OngEnderecoViewModel BuscarPorId(Guid id)
        {
           
            
                 Ong ongSearch = _context.Ongs.FirstOrDefault(c => c.Id == id);
                 Endereco EnderecoSearch = _context.Enderecos.FirstOrDefault(c => c.IdOng == id);

                OngEnderecoViewModel ongEnderecoViewModel = new OngEnderecoViewModel()
                {
                    Ong = ongSearch,
                    Endereco = EnderecoSearch
                };
                return ongEnderecoViewModel;
           
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
            List<Endereco>? EnderecoList = _context.Enderecos.ToList();

            foreach (var item in ongList)
            {
                // Insere uma ong da lista
                ongEnderecos.Add(new OngEnderecoViewModel
                {
                    Ong = item,
                   Endereco = EnderecoList.FirstOrDefault(c => c.IdOng == item.Id),
                    
                });
            }







            return ongEnderecos;
        }
    }
}
