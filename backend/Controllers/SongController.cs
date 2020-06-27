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
    public class SongController : Controller
    {
        public readonly BandverwaltungDetailContext _context;

        public SongController(BandverwaltungDetailContext context)
        {
            _context = context;
        }
        // GET: api/Song
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Song>>> GetSongs()
        {
            return await _context.Songs.ToListAsync();
        }

        // GET api/Song/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Song>> GetSong(int id)
        {
            var song = await _context.Songs.FindAsync(id);
            if (song == null)
            {
                return NotFound();
            }
            return song;
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<Song>> PostSong(Song song)
        {
            _context.Songs.Add(song);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSong", new { id = song.SongId }, song);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSong(int id, Song song)
        {
            if (id != song.SongId)
            {
                return BadRequest();
            }
            _context.Entry(song).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SongExists(id))
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
        public async Task<ActionResult<Song>> DeleteSong(int id)
        {
            var song = await _context.Songs.FindAsync(id);
            if (song == null)
            {
                return NotFound();
            }
            _context.Songs.Remove(song);
            await _context.SaveChangesAsync();

            return song;
        }
        private bool SongExists(int id)
        {
            return _context.Songs.Any(e => e.SongId == id);
        }
    }
}
