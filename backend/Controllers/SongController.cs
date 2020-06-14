using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class SongController : ApiController
    {
        private Songs[] songs = new Songs[]{
            new Songs { id = 1, name = "Lonely Stranger", album = "Delusion" },
            new Songs { id = 2, name = "Springtide", album = "Delusion" },
            new Songs { id = 3, name = "Pressure Kills", album = "Delusion" },
            new Songs { id = 4, name = "Free Days", album = "Delusion" },
            new Songs { id = 5, name = "Delusion", album = "Delusion" },
            new Songs { id = 6, name = "The Path", album = "Delusion" }
        };

        // GET: api/Users

        [ResponseType(typeof(IEnumerable<Songs>))]

        public IEnumerable<Songs> Get()

        {

            return songs;

        }

        // GET: api/Users/5

        public IHttpActionResult Get(int id)

        {

            var song = songs.FirstOrDefault((p) => p.id == id);

            if (song == null)

            {

                return NotFound();

            }

            return Ok(song);

        }
    }
}