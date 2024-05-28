using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiHopeHand.Domains
{
    [Table(nameof(Endereco))]
    public class Endereco
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        
        public Guid IdOng { get; set; }
        [ForeignKey(nameof(IdOng))]
        public Ong Ong { get; set; }

        public int Numero { get; set; }

        public int Cep { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }

        public string? Address { get; set; }
    }
}
