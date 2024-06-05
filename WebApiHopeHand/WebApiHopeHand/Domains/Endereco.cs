using WebApiHopeHand.Domains;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiHopeHand.Domains
{
    [Table(nameof(Endereco))]
    public class Endereco
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();


        [Required(ErrorMessage = "A ONG deste endereço é obrigatória!")]
        public Guid? IdOng { get; set; }

        [ForeignKey(nameof(IdOng))]
        public Ong? Ong { get; set; }



        [Column(TypeName = "INT")]
        [Required(ErrorMessage = "O número do endereço é obrigatório!")]
        public int Number { get; set; }


        [Column(TypeName = "VARCHAR(9)")]
        [Required(ErrorMessage = "O CEP é obrigatório")]
        public string? Cep { get; set; }


        [Column(TypeName = "VARCHAR(100)")]
        public string? City { get; set; }


        [Column(TypeName = "VARCHAR(100)")]
        public string? State { get; set; }


        [Column(TypeName = "VARCHAR(100)")]
        public string? Address { get; set; }
    }
}
