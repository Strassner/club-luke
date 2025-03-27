using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using TeeTimeManager.Data;
using TeeTimeManager.Models.Entities;

namespace TeeTimeManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeeTimesController : ControllerBase
    {
        //dependency injection of TeeTimeContext
        private readonly TeeTimeContext _context;

        public TeeTimesController(TeeTimeContext context)
        {
            _context = context;
        }

        // GET: BaseUrl/TeeTimes
        //returns all TeeTimes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeeTime>>> GetTeeTimes()
        {
            return await _context.TeeTimes.ToListAsync();
        }

        // GET: BaseUrl/TeeTimes/{id}
        //return teetime based on id
        [HttpGet("{id}")]
        public async Task<ActionResult<TeeTime>> GetTeeTime(int id)
        {
            var teeTime = await _context.TeeTimes.FindAsync(id);

            if (teeTime == null)
            {
                return NotFound();
            }

            return teeTime;
        }

        // PUT: api/TeeTimes/{id}
        //update a teetime at the specified id, must include full teetime object
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeeTime(int id, TeeTime teeTime)
        {
            if (id != teeTime.Id)
            {
                return BadRequest();
            }

            _context.Entry(teeTime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeeTimeExists(id))
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

        // POST: BaseUrl/TeeTimes
        //create new TeeTime
        [HttpPost]
        public async Task<ActionResult<TeeTime>> PostTeeTime(TeeTime teeTime)
        {
            //validation checks
            //get the corresponding timeslot
            var timeSlot = await _context.TimeSlots.FirstOrDefaultAsync(tSlot => tSlot.Id == teeTime.TimeSlotId);
            //check if timeslot is found
            if(timeSlot is null) {
                return BadRequest("Corresponding time slot not found.");
            }
            //if timeslot is already booked/filled
            if (timeSlot.IsOpen == false) {
                return BadRequest("Time slot already booked");
            }
            //teetime is valid
            _context.TeeTimes.Add(teeTime);
            //update the timeslot, set isopen to false, set the fk to Teetime.id
            timeSlot.IsOpen = false;
            timeSlot.TimeSlotTeeTimeId = teeTime.Id;
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeeTime", new { id = teeTime.Id }, teeTime);
        }

        // DELETE: BaseUrl/TeeTimes/{id}
        //delete specified TeeTime of {id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeeTime(int id)
        {
            var teeTime = await _context.TeeTimes.FindAsync(id);
            if (teeTime == null)
            {
                return NotFound();
            }

            _context.TeeTimes.Remove(teeTime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeeTimeExists(int id)
        {
            return _context.TeeTimes.Any(e => e.Id == id);
        }
    }
}
