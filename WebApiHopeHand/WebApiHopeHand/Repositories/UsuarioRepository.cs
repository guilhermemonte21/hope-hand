using Microsoft.EntityFrameworkCore;
using WebAPI.Utils;
using WebApiHopeHand.Context;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Interfaces;

namespace WebApiHopeHand.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
          private HopeContext _context = new HopeContext();
        public bool AlterarSenha(string email, string senhaNova)
        {
            try
            {
                //Cria o user, que busca o usuario pelo email
                var user = _context.Usuarios.FirstOrDefault(x => x.Email == email);

                //Caso nao encontre ira retornar false
                if (user == null) return false; 

                //Gera um hash a partir da senha informada pelo usuario
                user.Password = Criptografia.GerarHash(senhaNova);

                //Atualiza o usuario
                _context.Update(user);

                //Salva as mudancas feitas na context
                _context.SaveChanges();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        
        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                //cria o user e seleciona as propriedades que serao utilizadas no FirstOrDefault
                var user = _context.Usuarios.Select(u => new Usuario
                {
                    Id = u.Id,
                    Email = u.Email,
                    Password = u.Password,
                    Name = u.Name,
                    
                }).FirstOrDefault
                (x => x.Email == email);

                //caso o user seja nulo ele ira retornar nulo
                if (user == null) return null!;

                //compara o hash da senha inserida, com a senha do banco
                if (!Criptografia.CompararHash(senha, user.Password!)) return null!;

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }
    

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
            //busca o usuario na context e define o metodo de busca por id
                var user = _context.Usuarios.FirstOrDefault(x => x.Id == id)!;

             //verifica se o user é nulo
            if (user == null) return null!;
            return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                //Gera um hash a partir da senha informada pelo usuario
                usuario.Password = Criptografia.GerarHash(usuario.Password!);
                //Adiciona o usuario na context
                _context.Add(usuario);
                //Salva as mudancas da context
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }}

