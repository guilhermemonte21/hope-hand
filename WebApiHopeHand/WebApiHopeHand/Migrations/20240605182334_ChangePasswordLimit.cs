using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiHopeHand.Migrations
{
    /// <inheritdoc />
    public partial class ChangePasswordLimit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Usuario",
                type: "VARCHAR(MAX)",
                maxLength: 16,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(20)",
                oldMaxLength: 16);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Usuario",
                type: "VARCHAR(20)",
                maxLength: 16,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(MAX)",
                oldMaxLength: 16);
        }
    }
}
