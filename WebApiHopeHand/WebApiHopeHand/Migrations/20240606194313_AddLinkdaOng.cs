﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiHopeHand.Migrations
{
    /// <inheritdoc />
    public partial class AddLinkdaOng : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Ong",
                type: "VARCHAR(MAX)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Link",
                table: "Ong");
        }
    }
}
