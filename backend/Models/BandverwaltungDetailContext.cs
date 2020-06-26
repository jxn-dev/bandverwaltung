using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class BandverwaltungDetailContext: DbContext
    {
        public BandverwaltungDetailContext(DbContextOptions<BandverwaltungDetailContext> options):base(options)
        {
            
        }
        public DbSet<Song> Songs { get; set; }
        
        public DbSet<Album> Albums { get; set; }

        public DbSet<Gig> Gigs { get; set; }
    }
}
