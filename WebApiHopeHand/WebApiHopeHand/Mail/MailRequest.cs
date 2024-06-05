namespace WebApiHopeHand.Mail
{
    public class MailRequest
    {
        // email do destinatário
        public string? ToEmail { get; set; }

        // assunto do email
        public string? Subject { get; set; }

        // corpo do Email
        public string? Body { get; set; }
    }
}