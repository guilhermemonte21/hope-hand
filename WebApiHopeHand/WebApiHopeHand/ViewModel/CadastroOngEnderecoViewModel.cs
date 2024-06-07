using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WebApiHopeHand.Domains;

namespace WebApiHopeHand.ViewModel
{
    public class CadastroOngEnderecoViewModel
    {
        // Propriedades da ONG

        [Required(ErrorMessage = "O nome da ONG é obrigatório!")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "O CNPJ da ONG é obrigatório!")]
        public string? Cnpj { get; set; }

        public string? Link { get; set; }

        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        [Column(TypeName = "VARCHAR(MAX)")]
        public string? Photo { get; set; }

        public string? Description { get; set; }

        [Required(ErrorMessage = "O usuário líder da ONG é obrigatório!")]
        public Guid? UserId { get; set; }




        // Propriedades do Endereco

        [Required(ErrorMessage = "A ONG deste endereço é obrigatória!")]
        public Guid? IdOngFK { get; set; }

        [Required(ErrorMessage = "O número do endereço é obrigatório!")]
        public int Number { get; set; }

        [Required(ErrorMessage = "O CEP é obrigatório")]
        public string? Cep { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }

        public string? Address { get; set; }

    }
}
