using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class AlbumController : ApiController
    {
        private Album[] alben = new Album[]{
            new Album { id = 1, name = "Delusion" },
            new Album { id = 2, name = "Paranoia" }
        };

        // GET: api/Users

        [ResponseType(typeof(IEnumerable<Album>))]

        public IEnumerable<Album> Get()

        {

            return alben;

        }

        // GET: api/Users/5

        public IHttpActionResult Get(int id)

        {

            var album = alben.FirstOrDefault((p) => p.id == id);

            if (album == null)

            {

                return NotFound();

            }

            return Ok(album);

        }
    }
}