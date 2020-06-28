import { Component, OnInit } from '@angular/core';
import { AlbumsModel } from '../albums/albums.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.model.html',
  styleUrls: ['./songs.model.scss']
})
export class SongsModel {

  SongId: number;
  SongName: string;
  AlbumName: AlbumsModel;
}
