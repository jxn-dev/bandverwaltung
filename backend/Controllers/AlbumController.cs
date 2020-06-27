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
    public class AlbumController : Controller
    {
        public readonly BandverwaltungDetailContext _context;

        public AlbumController(BandverwaltungDetailContext context)
        {
            _context = context;
        }
        // GET: api/Album
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Album>>> GetAlbums()
        {
            return await _context.Albums.ToListAsync();
        }

        // GET api/Album/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbum(int id)
        {
            var album = await _context.Albums.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }
            return album;
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<Album>> PostAlbum(Album album)
        {
            _context.Albums.Add(album);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = album.AlbumId }, album);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum(int id, Album album)
        {
            if (id != album.AlbumId)
            {
                return BadRequest();
            }
            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
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
        public async Task<ActionResult<Album>> DeleteAlbum(int id)
        {
            var album = await _context.Albums.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }
            _context.Albums.Remove(album);
            await _context.SaveChangesAsync();

            return album;
        }
        private bool AlbumExists(int id)
        {
            return _context.Albums.Any(e => e.AlbumId == id);
        }
    }
}
