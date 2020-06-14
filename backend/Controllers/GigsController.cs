using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace backend.Controllers
{
    public class GigsController : ApiController
    {
        private Gigs[] gigs = new Gigs[]{
            new Gigs { id = 1, date = "14.06.2020", name = "Greenfield Festival" },
            new Gigs { id = 2, date = "13.04.2016", name = "BandXost 2k19" }
        };

        // GET: api/Users

        [ResponseType(typeof(IEnumerable<Gigs>))]

        public IEnumerable<Gigs> Get()

        {

            return gigs;

        }

        // GET: api/Users/5

        public IHttpActionResult Get(int id)

        {

            var gig = gigs.FirstOrDefault((p) => p.id == id);

            if (gig == null)

            {

                return NotFound();

            }

            return Ok(gig);

        }
    }
}