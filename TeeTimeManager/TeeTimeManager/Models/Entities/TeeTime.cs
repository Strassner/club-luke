using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeeTimeManager.Models.Entities {
    public class TeeTime {
        [Key]
        public int Id { get; set; }
        //NameUnder is who booked the TeeTime
        [Required]
        public string NameUnder { get; set; } = null!;
        [Required]
        public int TimeSlotId { get; set; }
        //how many holes they are planning on playing
        [Required]
        public int Holes { get; set; }
    }
}
