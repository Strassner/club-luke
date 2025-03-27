using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace TeeTimeManager.Models.Entities {
    public class TimeSlot {
        [Key]
        public int Id { get; set; }
        //A TimeSlot might not have a TeeTime
        public TeeTime? TimeSlotTeeTime { get; set; }
        [Required]
        public DateTime Time { get; set; }
        //Different times could be priced differently, based on demand
        //eg: saturday @1pm would cost more than tuesday @9am
        [Comment("TimeSlots can be priced differently")]
        [Required]
        public double Price { get; set; }
        [Comment("Specifies if TimeSlot is open")]
        [Required]
        public bool IsOpen { get; set; }
    }
}
