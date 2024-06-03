using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApiHopeHand.Domains;

namespace WebApiHopeHand.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(Email), IsUnique = true)]
    [Index(nameof(Cpf), IsUnique = true)]
    [Index(nameof(Rg), IsUnique = true)]
    public class Usuario
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O nome do usuário é obrigatório!")]
        public string? Name { get; set; }


        [Column(TypeName = "DATETIME")]
        [Required(ErrorMessage = "A data de nascimento é obrigatória!")]
        public DateTime? Birth { get; set; }


        [Column(TypeName = "VARCHAR(11)")]
        [Required(ErrorMessage = "O CPF é obrigatório!")]
        public string? Cpf { get; set; }


        [Column(TypeName = "VARCHAR(9)")]
        [Required(ErrorMessage = "O RG é obrigatório!")]
        public string? Rg { get; set; }


        [Column(TypeName = "VARCHAR(70)")]
        [Required(ErrorMessage = "O Email é obrigatório!")]
        public string? Email { get; set; }


        [Column(TypeName = "VARCHAR(20)")]
        [Required(ErrorMessage = "A senha é obrigatório!")]
        [StringLength(16, MinimumLength = 6, ErrorMessage = "A senha deve conter entre 6 a 16 caracteres")]
        public string? Password { get; set; }


        [Required(ErrorMessage = "A ONG é obrigatória!")]
        public Guid IdOng { get; set; }

        [ForeignKey(nameof(IdOng))]
        public Ong Ong { get; }
    }
}
