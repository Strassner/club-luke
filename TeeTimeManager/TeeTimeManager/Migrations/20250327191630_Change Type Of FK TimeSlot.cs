using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeeTimeManager.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTypeOfFKTimeSlot : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes");

            migrationBuilder.AddColumn<int>(
                name: "TimeSlotTeeTimeId",
                table: "TimeSlots",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes",
                column: "TimeSlotId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes");

            migrationBuilder.DropColumn(
                name: "TimeSlotTeeTimeId",
                table: "TimeSlots");

            migrationBuilder.CreateIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes",
                column: "TimeSlotId",
                unique: true);
        }
    }
}
