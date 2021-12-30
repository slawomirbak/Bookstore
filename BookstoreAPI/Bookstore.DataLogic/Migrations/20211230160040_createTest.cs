using Microsoft.EntityFrameworkCore.Migrations;

namespace Bookstore.DataLogic.Migrations
{
    public partial class createTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Tests",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Tests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tests_UserId",
                table: "Tests",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Users_UserId",
                table: "Tests",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Users_UserId",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Tests_UserId",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Tests");
        }
    }
}
