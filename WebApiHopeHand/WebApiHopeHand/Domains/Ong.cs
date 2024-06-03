using WebApiHopeHand.Domains;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiHopeHand.Domains
{
    [Table(nameof(Ong))]
    public class Ong
    {
        [Key]
        public Guid? Id { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O nome da ONG é obrigatório!")]
        public string? Name { get; set; }


        [Column(TypeName = "VARCHAR(14)")]
        [Required(ErrorMessage = "O CNPJ da ONG é obrigatório!")]
        public string? Cnpj { get; set; }


        [Column(TypeName = "VARCHAR(MAX)")]
        public string? Photo { get; set; }


        [Column(TypeName = "TEXT")]
        public string? Description { get; set; }


        [Required(ErrorMessage = "O usuário líder da ONG é obrigatório!")]
        public Guid? UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public Usuario? Usuario { get; set; }
    }
}