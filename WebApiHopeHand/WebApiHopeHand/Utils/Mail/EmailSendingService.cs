namespace WebApiHopeHand.Mail
{
    public class EmailSendingService
    {
        private readonly IEmailService _emailService;

        public EmailSendingService(IEmailService service)
        {
            _emailService = service;
        }

        /// <summary>
        /// Método para envio de e-mail de recuperação de senha
        /// </summary>
        /// <param name="email">Email do usuário</param>
        /// <param name="code">Código de recuperação</param>
        /// <returns>Task</returns>
        public async Task SendRecoveryPassword(string email, int code)
        {
            try
            {
                MailRequest request = new()
                {
                    ToEmail = email,
                    Subject = "Recuperação de senha",
                    Body = GetHtmlEmailContentRecovery(code)
                };

                await _emailService.SendEmailAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }


        /// <summary>
        /// Constrói o conteúdo HTML do e-mail, com o código de recuperação de senha
        /// </summary>
        /// <param name="code">Código de recuperação (int)</param>
        /// <returns>Conteúdo HTMl</returns>
        private string GetHtmlEmailContentRecovery(int code)
        {
            string Response = @"
<div style=""width:100%; background-color:rgba(124, 207, 255, 1); padding: 20px;"">
        <div style=""display: block; width: 500px; height: 100%; max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 10px; padding: 20px;"">
            <h1 style="" color: #333333;text-align: center;"">Recuperação de senha</h1>
            <img style=""display: block; margin-left: auto; margin-right: auto; width: 50%;"" src=""https://hopehandarmazenamento.blob.core.windows.net/hopehandcontainer/logo-azul-hopehand.png"" />
            <p style="" color: #666666;font-size: 24px; text-align: center;font: normal;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"">Olá, este é seu código de verificação:</p>
            <p style="" color: #666666;font-size: 24px; text-align: center;font: normal;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"" id=""p-text""><strong>" + code + @"</strong></p>
        </div>
    </div>"
             ;

            // Retorna o conteúdo HTML do e-mail
            return Response;
        }

    }
}
