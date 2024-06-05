namespace WebApiHopeHand.Mail
{
    public class Email
    {
        // email do remetente
        public string? SenderEmail { get; set; }

        // senha do remetente
        public string? Password { get; set; }

        // host do servidor SMTP
        public string? Host { get; set; }

        // nome exibido do remetente
        public string? SenderExhibitionName { get; set; }

        // porta do servidor SMTP
        public int Port { get; set; }
    }
}
