using System.ComponentModel.DataAnnotations.Schema;

namespace ApiHopeHand.Domains
{
    [Table(nameof(Ong))]
    public class Ong
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Nome { get; set; }
        public string? Foto { get; set; }
        public string? Descricao { get; set; }

        public Guid? EnderecoId { get; set; }
        [ForeignKey(nameof(EnderecoId))]
        public Endereco Endereco { get; set; }
    }
}
