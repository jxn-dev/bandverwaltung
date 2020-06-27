using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class GigController : Controller
    {
        public readonly BandverwaltungDetailContext _context;

        public GigController(BandverwaltungDetailContext context)
        {
            _context = context;
        }
        // GET: api/Gig
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gig>>> GetGigs()
        {
            return await _context.Gigs.ToListAsync();
        }

        // GET api/Gig/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gig>> GetGig(int id)
        {
            var gig = await _context.Gigs.FindAsync(id);
            if(gig == null)
            {
                return NotFound();
            }
            return gig;
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<Gig>> PostGig(Gig gig)
        {
            _context.Gigs.Add(gig);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGig", new { id = gig.GigId }, gig);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGig(int id, Gig gig)
        {
            if(id != gig.GigId)
            {
                return BadRequest();
            }
            _context.Entry(gig).State = EntityState.Modified;
            
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GigExists(id))
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

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Gig>> DeleteGig(int id)
        {
            var gig = await _context.Gigs.FindAsync(id);
            if(gig == null)
            {
                return NotFound();
            }
            _context.Gigs.Remove(gig);
            await _context.SaveChangesAsync();

            return gig;
        }
        private bool GigExists(int id)
        {
            return _context.Gigs.Any(e => e.GigId == id);
        }
    }
}
