using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiHopeHand.Domains
{
    [Table(nameof(Usuario))]
    public class Usuario
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        public string? Name { get; set; }
        public DateTime? Birth { get; set; }
        public int Cpf { get; set; }
        public int Rg { get; set; }

        [Required(ErrorMessage = "O Email é obrigatório!")]
        public string? Email { get; set; }


        [Required(ErrorMessage = "A senha é obrigatório!")]
        public string? Password { get; set; }


        public Guid IdOng { get; set; }
        [ForeignKey(nameof(IdOng))]
        public Ong Ong { get; }
    }
}
