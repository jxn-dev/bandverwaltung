import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SongTableItem } from '../songs/song-table/song-table-datasource';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  song: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  showSong() {
    this.dataService.addToSongs(7, 'Dummysong', 'Dummyalbum');
  }

}
