import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SongTableItem } from 'src/app/components/songs/song-table/song-table-datasource';
import { AlbumTableItem } from 'src/app/components/songs/album-table/album-table-datasource';
import { GigsTableItem } from 'src/app/components/gigs/gigs-table/gigs-table-datasource';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class DataService{
  songs: SongTableItem[] = [
    {id: 1, name: 'Lonely Stranger', album: 'Delusion'},
    {id: 2, name: 'Springtide', album: 'Delusion'},
    {id: 3, name: 'Pressure Kills', album: 'Delusion'},
    {id: 4, name: 'Free Days', album: 'Delusion'},
    {id: 5, name: 'Delusion', album: 'Delusion'},
    {id: 6, name: 'The Path', album: 'Delusion'},
  ];
  alben: AlbumTableItem[] = [
    {id: 1, name: 'Delusion'},
    {id: 2, name: 'Test Name'},
  ];
  gigs: GigsTableItem[] = [
    {date: '12.05.2020', name: 'Download Festival'},
    {date: '13.05.2020', name: 'Biker Festival Balzers'},
    {date: '14.05.2020', name: 'BandxOst 2k19'},
    {date: '15.05.2020', name: 'OpenHair Metalfestival'},
  ];

  addToSongs(id: number, name: string, album: string){
    const songToAdd = {id: id, name: name, album: album};
    this.songs.push(songToAdd);
    this.rerenderSongs(this.songs);
    console.log(this.songs);
  }
  addToAlbum(id: number, name: string){
    const albumToAdd = {id: id, name: name};
    this.alben.push(albumToAdd);
    this.rerenderAlben(this.alben);
    console.log(this.alben);
  }
  addToGigs(date: string, name: string){
    const gigsToAdd = {date: date, name: name};
    this.gigs.push(gigsToAdd);
    this.rerenderGigs(this.gigs);
    console.log(this.gigs);
  }
  rerenderSongs(data: SongTableItem[]){
    return data;
  }
  rerenderAlben(data: AlbumTableItem[]){
    return data;
  }
  rerenderGigs(data: GigsTableItem[]){
    return data;
  }
}
