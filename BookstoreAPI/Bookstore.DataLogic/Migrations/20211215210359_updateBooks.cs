using Microsoft.EntityFrameworkCore.Migrations;

namespace Bookstore.DataLogic.Migrations
{
    public partial class updateBooks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "BookRatings");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "BookRatings",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "BookRatings");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "BookRatings",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
