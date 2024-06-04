using WebApiHopeHand.Domains;
using Microsoft.EntityFrameworkCore;

namespace WebApiHopeHand.Context
{
    public class HopeContext : DbContext
    {
        public HopeContext()
        {

        }
        public HopeContext(DbContextOptions<HopeContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Se NÃO estiver configurado
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer("Data Source=NOTE02-SALA19; initial catalog=HopeHand;user id=sa; pwd=Senai@134; TrustServerCertificate = true;");
                optionsBuilder.UseSqlServer("Data Source=NOTE02-SALA19; Initial Catalog=HopeHand; User Id=sa; pwd=Senai@134; TrustServerCertificate = true;");
                //optionsBuilder.UseSqlServer("Data Source=DESKTOP-84UMQCT\\SQLEXPRESS; Initial Catalog=HopeHand; User Id=sa; pwd=Senai@134; TrustServerCertificate = true;");
            }
        }

        public virtual DbSet<Ong> Ongs { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Endereco> Enderecos { get; set; }
    }
}
