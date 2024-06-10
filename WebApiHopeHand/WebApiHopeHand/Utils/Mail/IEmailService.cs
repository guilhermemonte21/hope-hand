namespace WebApiHopeHand.Mail
{
    public interface IEmailService
    {
        /// <summary>
        /// Método assíncrono para envio de e-mail
        /// </summary>
        /// <param name="mailRequest">Objeto MailRequest</param>
        /// <returns>Task</returns>
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
