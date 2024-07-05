using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Interfaces;
using WebApiHopeHand.Repositories;
using WebApiHopeHand.ViewModel;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _userRepository;


        public LoginController()
        {
            _userRepository = new UsuarioRepository();
        }


        /// <summary>
        /// Realiza o login do usuário com o Email e Senha
        /// </summary>
        /// <param name="user">Objeto LoginViewModel (propriedades EMAIL e SENHA)</param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Login(LoginViewModel user)
        {
            try
            {
                // Traz o usuário no banco
                Usuario searchedUser = _userRepository.BuscarPorEmailESenha(user.Email!, user.Password!);

                // Verifica se o usuário buscado existe
                if (searchedUser == null)
                {
                    return BadRequest("Email ou senha inválidos!");
                }

                #region Configs_Token
                // 1 - Definir as informações(Claims) que serão fornecidas no Token (Payload)
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, searchedUser.Id.ToString()!),
                    new Claim(JwtRegisteredClaimNames.Email, searchedUser.Email!)
                };


                // 2 - Definir a chave de acesso do toten
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("hopehand-webapi-authentication-security-key"));

                // 3 - Definir as credenciais do token (Header)
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                #endregion

                #region Gerar_Token
                // 4 - Gerar o tokens
                var token = new JwtSecurityToken
                (
                    // emissor do token
                    issuer: "HopeHand.webapi",

                    // destinatário
                    audience: "HopeHand.webapi",

                    // dados definidos nas claims (Payload)
                    claims: claims,

                    // tempo de expiração
                    expires: DateTime.Now.AddMinutes(25),

                    // credenciais do token
                    signingCredentials: creds
                );
                #endregion

                #region Retornar_Token
                // 5 - Retornar o token
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
                #endregion
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

    }
}