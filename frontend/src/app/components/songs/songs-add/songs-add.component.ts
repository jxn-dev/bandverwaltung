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

  id: number;
  songname: string;
  album: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  writeId(id: number) {
    this.id = id;
  }
  writeSongname(songname: string) {
    this.songname = songname;
  }
  writeAlbum(album: string) {
    this.album = album;

    this.dataService.addToSongs(this.id, this.songname, this.album);

  }
}
