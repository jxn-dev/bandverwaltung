import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { DataService } from 'src/app/shared/services/data.service';
import { SongTableDataSource } from '../song-table/song-table-datasource';

@Component({
  selector: 'app-songs-add',
  templateUrl: './songs-add.component.html',
  styleUrls: ['./songs-add.component.scss']
})
export class SongsAddComponent implements OnInit {

  data: DataService = new DataService();
  id: number;
  songname: string;
  album: string;
  ngOnInit(): void {
  }

  writeId(id: number){
    this.id = id;
  }
  writeSongname(songname: string){
    this.songname = songname;
  }
  writeAlbum(album: string){
    this.album = album;

    this.data.addToSongs(this.id, this.songname, this.album);
    
  }
}
