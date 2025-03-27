using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeeTimeManager.Migrations
{
    /// <inheritdoc />
    public partial class RedoMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TimeSlots",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Time = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false, comment: "TimeSlots can be priced differently"),
                    IsOpen = table.Column<bool>(type: "bit", nullable: false, comment: "Specifies if TimeSlot is open")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeSlots", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TeeTimes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameUnder = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TimeSlotId = table.Column<int>(type: "int", nullable: false),
                    Holes = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeeTimes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TeeTimes_TimeSlots_TimeSlotId",
                        column: x => x.TimeSlotId,
                        principalTable: "TimeSlots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes",
                column: "TimeSlotId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TeeTimes");

            migrationBuilder.DropTable(
                name: "TimeSlots");
        }
    }
}
