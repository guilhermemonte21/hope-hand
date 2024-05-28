namespace ApiHopeHand.Domains
{
    public class UsuarioDomain
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; }
        public DateTime? Birth { get; set; }
        public int Cpf { get; set; }
        public int Rg { get; set; }
        public  string? email { get; set; }
        public string? password { get; set; }
        public Guid IdOng {  get; set; }
        public OngDomain Ong { get;}
    }
}
