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

            //busca a ong pelo ID
            Ong ongSearch = _context.Ongs.FirstOrDefault(c => c.Id == id)!;
            //busca o endereco pelo Id
            Endereco EnderecoSearch = _context.Enderecos.FirstOrDefault(c => c.IdOng == id)!;

            //cria um novo objeto e passa os valores do que foi buscado
            OngEnderecoViewModel ongEnderecoViewModel = new()
            {
                Ong = ongSearch,
                Endereco = EnderecoSearch
            };
            return ongEnderecoViewModel;

        }

        public void AlterarFoto(Guid ongId, string newPhotoUri)
        {
            Ong ongSearched = _context.Ongs.FirstOrDefault(ong => ong.Id == ongId)!;

            if (ongSearched != null)
            {
                // Altera a foto da ONG
                ongSearched.Photo = newPhotoUri;
            }
            _context.SaveChanges();
        }

        public void Cadastrar(Ong ong)
        {
            //Adiciona a ong
            _context.Ongs.Add(ong);
            //Salva as mudancas
            _context.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            //busca pelo id o perfil desejado para ser deletado
            Ong ong = _context.Ongs.FirstOrDefault(x => x.Id == id)!;
            //deleta o perfil
            _context.Ongs.Remove(ong);
            //salva as mudancas
            _context.SaveChanges();
        }

        public void EditarOng(AlterarOngViewModel ong)
        {
            //Acha a Ong pelo ID
            Ong ongSearched = _context.Ongs.FirstOrDefault(o => o.Id == ong.Id)!;

            // Verifica se a ONG buscada existe
            if (ongSearched != null)
            {
                // Insere as propriedades da ong
                if (ong.Cnpj != null)
                    ongSearched.Cnpj = ong.Cnpj;

                if (ong.Name != null)
                    ongSearched.Name = ong.Name;

                if (ong.Link != null)
                    ongSearched.Link = ong.Link;

                if (ong.Description != null)
                    ongSearched.Description = ong.Description;
            }

            //comando para atualizar esses enderecos e ongs buscada
            _context.Ongs.Update(ongSearched!);
            _context.SaveChanges();
        }

        public List<OngEnderecoViewModel> Listar()
        {
            //Cria e instancia uma lista
            List<OngEnderecoViewModel> ongEnderecos = [];

            //Lista Ongs
            List<Ong>? ongList = _context.Ongs.ToList();
            //Lista o Endereco
            List<Endereco>? EnderecoList = _context.Enderecos.ToList();

            foreach (var item in ongList)
            {
                // Insere uma ong da lista
                ongEnderecos.Add(new OngEnderecoViewModel
                {
                    Ong = item,
                    Endereco = EnderecoList.FirstOrDefault(c => c.IdOng == item.Id)!,

                });
            }
            return ongEnderecos;
        }
    }
}
