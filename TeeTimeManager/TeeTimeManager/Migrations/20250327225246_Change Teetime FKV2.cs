using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeeTimeManager.Migrations
{
    /// <inheritdoc />
    public partial class ChangeTeetimeFKV2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TeeTimes_TimeSlots_TimeSlotId",
                table: "TeeTimes");

            migrationBuilder.DropIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_TeeTimes_TimeSlotId",
                table: "TeeTimes",
                column: "TimeSlotId");

            migrationBuilder.AddForeignKey(
                name: "FK_TeeTimes_TimeSlots_TimeSlotId",
                table: "TeeTimes",
                column: "TimeSlotId",
                principalTable: "TimeSlots",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
