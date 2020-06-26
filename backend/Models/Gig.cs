using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Gig
    {
        [Key]
        public int GigId { get; set; }

        [Required]
        [Column(TypeName ="varchar(10)")]
        public string GigDate { get; set; } // dd.mm.yyyy

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string GigName { get; set; }
    }
}
