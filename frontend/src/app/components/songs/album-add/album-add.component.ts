import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AlbumTableDataSource } from '../album-table/album-table-datasource';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss']
})
export class AlbumAddComponent implements OnInit {
  id: number;
  albumname: string;
  songs: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  writeId(id: number){
    this.id = id;
  }
  writeAlbum(album: string){
    this.albumname = album;
    this.dataService.addToAlbum(this.id, this.albumname);
  }
}
