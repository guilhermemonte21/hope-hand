namespace ApiHopeHand.Domains
{
    public class OngDomain
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Nome { get; set; }
        public string? Foto { get; set; }
        public string? Descricao { get; set; }
        public string? EnderecoId { get; set; }
        public EnderecoDomain Endereco { get; set; }


    }
}
