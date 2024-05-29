using ApiHopeHand.Domains;
using Microsoft.EntityFrameworkCore;

namespace ApiHopeHand.Context
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
                optionsBuilder.UseSqlServer("Data Source = NOTE02-SALA19; initial catalog = HopeHand;user id=sa; pwd = Senai@134; TrustServerCertificate = true;"); //
            }
        }

        public DbSet<Ong> Ongs { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
    }
}
