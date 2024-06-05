using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiHopeHand.Context;
using WebApiHopeHand.Domains;
using WebApiHopeHand.Mail;

namespace WebApiHopeHand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly HopeContext _context;
        private readonly EmailSendingService _emailSendingService;

        public RecuperarSenhaController(HopeContext context, EmailSendingService emailSendingService)
        {
            _context = context;
            _emailSendingService = emailSendingService;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCode(string email)
        {
            try
            {
                Usuario userSearched = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

                if (userSearched == null)
                {
                    return NotFound("Usuário não encontrado! Verifique se o email inserido está cadastrado!");
                }

                // Gerar um código de 4 dígitos que será usado para verificação
                Random randomNumbers = new Random();
                int recoveryCodeNumbers = randomNumbers.Next(1000, 9999);

                // Recebe o valor numérico aleatório gerado
                userSearched.CodRecupSenha = recoveryCodeNumbers;

                await _context.SaveChangesAsync();

                // Código para realizar o envio do email
                await _emailSendingService.SendRecoveryPassword(userSearched.Email!, recoveryCodeNumbers);

                return Ok("Código enviado com sucesso ao usuário!");
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        [HttpPost("ValidarCodigoRecuperacaoSenha")]
        public async Task<IActionResult> VerifyPasswordRecoveryCode(string email, int code)
        {
            try
            {
                Usuario userSearched = await _context.Usuarios.FirstOrDefaultAsync(user => user.Email == email);

                if (userSearched == null)
                {
                    return NotFound("Usuário não encontrado! Verifique se o email inserido está cadastrado!");
                }

                if (userSearched.CodRecupSenha == code)
                {
                    // Limpa o campo de código de recuperação de senha
                    userSearched.CodRecupSenha = null;
                    await _context.SaveChangesAsync();
                    return Ok("Código de recuperação de senha válido!");
                }

                return BadRequest("Código de recuperação de senha inválido!");
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }
    }
}
