using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Song
    {
        [Key]
        public int SongId { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string SongName { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public Album AlbumName { get; set; }
    }
}
