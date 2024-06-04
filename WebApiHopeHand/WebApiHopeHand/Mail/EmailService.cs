using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;

namespace WebApiHopeHand.Mail
{
    public class EmailService : IEmailService
    {
        // Objeto que guarda as configurações/propriedades do Email
        private readonly Email _emailSettings;

        // Construtor com a injeção de dependência do Email
        public EmailService(IOptions<Email> options)
        {
            _emailSettings = options.Value;
        }

        // Método para envio de e-mail
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            try
            {
                //objeto que representa o e-mail
                var email = new MimeMessage();

                //define o remetente do e-mail
                email.Sender = MailboxAddress.Parse(_emailSettings.SenderEmail);

                //define o destinatário do e-mail
                email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));

                //define o assunto do email
                email.Subject = mailRequest.Subject;

                //cria o corpo do email
                var builder = new BodyBuilder();

                //define o corpo do email como html
                builder.HtmlBody = mailRequest.Body;

                //define o corpo do email no obj MimeMessage
                email.Body = builder.ToMessageBody();

                //cria um client SMTP para envio de email
                using (var smtp = new SmtpClient())
                {
                    //conecta-se ao servidor SMTP usando os dados de emailSettings
                    smtp.Connect(_emailSettings.Host, _emailSettings.Port, SecureSocketOptions.StartTls);

                    //autentica-se no servidor SMTP usando os dados de emailSettings
                    smtp.Authenticate(_emailSettings.SenderEmail, _emailSettings.Password);

                    //envia o email
                    await smtp.SendAsync(email);
                }

            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
