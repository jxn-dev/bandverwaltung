using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Album
    {
        [Key]
        public int AlbumId { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string AlbumName { get; set; }
    }
}
