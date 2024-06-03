using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Context;
using Microsoft.EntityFrameworkCore;

namespace WebApiHopeHand.Repositories
{
    public class EnderecoRepository : IEnderecoRepository
    {
        private HopeContext _context = new HopeContext();


        /// <summary>
        /// Altera um Endereco existente do banco de dados
        /// </summary>
        /// <param name="id">id do Endereco</param>
        /// <param name="insertedAddress">Objeto Endereco</param>
        /// <returns>Objeto Endereco</returns>
        public Endereco AtualizarEndereco(Guid id, Endereco insertedAddress)
        {
            Endereco searchedAddress = _context.Enderecos.FirstOrDefault(x => x.Id == id)!;

            if (insertedAddress.Number > 0)
                searchedAddress.Number = insertedAddress.Number;

            if (insertedAddress.Cep != null)
                searchedAddress.Cep = insertedAddress.Cep;

            if (insertedAddress.City != null)
                searchedAddress.City = insertedAddress.City;

            if (insertedAddress.State != null)
                searchedAddress.State = insertedAddress.State;

            if (insertedAddress.Address != null)
                searchedAddress.Address = insertedAddress.Address;

            _context.Enderecos.Update(searchedAddress!);
            _context.SaveChanges();

            return searchedAddress;
        }

        /// <summary>
        /// Cadastra um novo Endereco no banco de dados (Endereço da clínica segundo as regras de negócio)
        /// </summary>
        /// <param name="endereco">Objeto Endereco</param>
        /// <returns>Objeto Endereco/null</returns>
        public Endereco? Cadastrar(Endereco endereco)
        {
            if (endereco != null)
            {
                _context.Add(endereco);
                _context.SaveChanges();

                return endereco;
                // Busca o mesmo endereço no banco, se existir, retorna-o
                //Endereco addressFromDb = _context.Enderecos.FirstOrDefault(address => address.Cep == endereco.Cep && address.Number == endereco.Number)!;
                // Se for um novo endereço
                //if (addressFromDb == null)
                //{
                //    // Adiciona o novo endereço
                //    _context.Add(endereco);
                //    _context.SaveChanges();
                //    return endereco;
                //}
                //return null;
            }
            return null;
        }

        /// <summary>
        /// Busca todos os Endereços por Cidade
        /// </summary>
        /// <param name="city">Nome cidade</param>
        /// <returns>Lista de objetos Endereco</returns>
        public List<Endereco> ListarPorCidade(string city)
        {
            List<Endereco> searchedAddresses = _context.Enderecos
                .Include(x => x.Ong)
                .Where(address => address.City.ToLower() == city.ToLower())
                .ToList();
            return searchedAddresses;
        }
    }
}
