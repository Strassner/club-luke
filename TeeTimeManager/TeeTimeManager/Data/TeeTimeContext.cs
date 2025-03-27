using Microsoft.EntityFrameworkCore;
using TeeTimeManager.Models.Entities;

namespace TeeTimeManager.Data {
    public class TeeTimeContext : DbContext{
        public TeeTimeContext (DbContextOptions<TeeTimeContext> options) : base(options) { }

        public DbSet<TimeSlot> TimeSlots { get; set; }
        public DbSet<TeeTime> TeeTimes { get; set; }
    }
}
