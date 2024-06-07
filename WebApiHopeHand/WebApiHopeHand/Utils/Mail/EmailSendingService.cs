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
        <div style=""width:100%; background-color:rgba(96, 191, 197, 1); padding: 20px;"">
            <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                <h1 style=""color: #333333;text-align: center;"">Recuperação de senha</h1>
                <p style=""color: #666666;font-size: 24px; text-align: center;"">Código de confirmação <strong>" + code + @"</strong></p>
            </div>
        </div>";

            // Retorna o conteúdo HTML do e-mail
            return Response;
        }

    }
}
