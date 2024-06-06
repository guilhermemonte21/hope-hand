using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiHopeHand.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Birth = table.Column<DateTime>(type: "DATETIME", nullable: false),
                    Cpf = table.Column<string>(type: "VARCHAR(11)", nullable: false),
                    Rg = table.Column<string>(type: "VARCHAR(9)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(70)", nullable: false),
                    Password = table.Column<string>(type: "VARCHAR(20)", maxLength: 16, nullable: false),
                    IdOng = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ong",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Cnpj = table.Column<string>(type: "VARCHAR(14)", nullable: false),
                    Photo = table.Column<string>(type: "VARCHAR(MAX)", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ong", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ong_Usuario_UserId",
                        column: x => x.UserId,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Endereco",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdOng = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Number = table.Column<int>(type: "INT", nullable: false),
                    Cep = table.Column<string>(type: "VARCHAR(9)", nullable: false),
                    City = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    State = table.Column<string>(type: "VARCHAR(100)", nullable: true),
                    Address = table.Column<string>(type: "VARCHAR(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endereco", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Endereco_Ong_IdOng",
                        column: x => x.IdOng,
                        principalTable: "Ong",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Endereco_IdOng",
                table: "Endereco",
                column: "IdOng");

            migrationBuilder.CreateIndex(
                name: "IX_Ong_UserId",
                table: "Ong",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Cpf",
                table: "Usuario",
                column: "Cpf",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Email",
                table: "Usuario",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Rg",
                table: "Usuario",
                column: "Rg",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Endereco");

            migrationBuilder.DropTable(
                name: "Ong");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
