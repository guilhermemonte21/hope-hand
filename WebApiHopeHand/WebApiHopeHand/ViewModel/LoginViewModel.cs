using System.ComponentModel.DataAnnotations;

namespace WebApiHopeHand.ViewModel
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "O Email é obrigatório!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatório!")]
        [StringLength(16, MinimumLength = 6, ErrorMessage = "A senha deve conter entre 6 a 16 caracteres")]
        public string? Password { get; set; }
    }
}