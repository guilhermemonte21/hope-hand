using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiHopeHand.Migrations
{
    /// <inheritdoc />
    public partial class PropsLongitudeELatitudeInserted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Latitude",
                table: "Endereco",
                type: "VARCHAR(30)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Longitude",
                table: "Endereco",
                type: "VARCHAR(30)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Endereco");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Endereco");
        }
    }
}
