using System.ComponentModel.DataAnnotations;

namespace WebApiHopeHand.ViewModel
{
    public class UserIdViewModel
    {
        [Required(ErrorMessage = "O id do usuário é obrigatório!")]
        public Guid? Id { get; set; }
    }
}
