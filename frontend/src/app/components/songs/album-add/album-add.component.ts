import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AlbumTableDataSource } from '../album-table/album-table-datasource';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent implements OnInit {
  data: DataService = new DataService();
  id: number;
  albumname: string;
  songs: string;

  constructor() { }

  ngOnInit(): void {
  }
  writeId(id: number){
    this.id = id;
  }
  writeAlbum(album: string){
    this.albumname = album;
  }
  writeSongs(songs: string){
    this.songs = songs;
    this.data.addToAlbum(this.id, this.albumname);
    
  }
}
