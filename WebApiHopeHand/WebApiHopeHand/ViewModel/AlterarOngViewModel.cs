using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApiHopeHand.ViewModel
{
    public class AlterarOngViewModel
    {
        [Key]
        public Guid? Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; }
        public string? Cnpj { get; set; }
        public string? Link { get; set; }
        public string? Description { get; set; }
    }
}
