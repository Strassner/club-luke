using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeeTimeManager.Data;
using TeeTimeManager.Models.Entities;

namespace TeeTimeManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeSlotsController : ControllerBase
    {
        //dependency injection of TeeTimeContext
        private readonly TeeTimeContext _context;
        public TimeSlotsController(TeeTimeContext context)
        {
            _context = context;
        }

        // GET: BaseUrl/TimeSlots
        //return all timeslots
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeSlot>>> GetTimeSlots()
        {
            return await _context.TimeSlots.ToListAsync();
        }

        // GET: BaseUrl/TimeSlots/{id}
        //return timeslot based on id parameter
        [HttpGet("{id}")]
        public async Task<ActionResult<TimeSlot>> GetTimeSlot(int id)
        {
            var timeSlot = await _context.TimeSlots.FindAsync(id);

            if (timeSlot == null)
            {
                return NotFound();
            }

            return timeSlot;
        }

        // PUT: BaseUrl/TimeSlots/{id}
        //update a timeslot at the specified id, must include full timeslot object
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTimeSlot(int id, TimeSlot timeSlot)
        {
            if (id != timeSlot.Id)
            {
                return BadRequest();
            }

            _context.Entry(timeSlot).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeSlotExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: BaseUrl/TimeSlots
        //create a new timeslot
        [HttpPost]
        public async Task<ActionResult<TimeSlot>> PostTimeSlot(TimeSlot timeSlot)
        {
            _context.TimeSlots.Add(timeSlot);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTimeSlot", new { id = timeSlot.Id }, timeSlot);
        }

        // DELETE: BaseUrl/TimeSlots/{id}
        //delete timeslot with {id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTimeSlot(int id)
        {
            var timeSlot = await _context.TimeSlots.FindAsync(id);
            if (timeSlot == null)
            {
                return NotFound();
            }

            _context.TimeSlots.Remove(timeSlot);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TimeSlotExists(int id)
        {
            return _context.TimeSlots.Any(e => e.Id == id);
        }
    }
}
