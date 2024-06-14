using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApiHopeHand.ViewModel
{
    public class ChangePhotoViewModel
    {
        
        public Guid IdOng { get; set; } = Guid.NewGuid();

        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }
        [Column(TypeName = "VARCHAR(MAX)")]
        public string? Photo { get; set; }
    }
}
