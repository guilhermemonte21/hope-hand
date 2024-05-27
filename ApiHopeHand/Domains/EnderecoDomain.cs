namespace ApiHopeHand.Domains
{
    public class EnderecoDomain
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public int Numero { get; set; }

        public int Cep { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }

        public string? Address { get; set; }
    }
}
