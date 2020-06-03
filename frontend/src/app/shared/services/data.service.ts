import { Injectable } from '@angular/core';
import { SongTableItem } from 'src/app/components/songs/song-table/song-table-datasource';
import { AlbumTableItem } from 'src/app/components/songs/album-table/album-table-datasource';
import { GigsTableItem } from 'src/app/components/gigs/gigs-table/gigs-table-datasource';
import { Subject, BehaviorSubject } from 'rxjs';

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


  constructor(){

  }
  addToSongs(id: number, name: string, album: string){
    const songToAdd ={id: id, name: name, album: album};
    this.songs.push(songToAdd);

    // New
    this.pushSongs();

    console.log(this.songs);
  }
  addToAlbum(id: number, name: string){
    const albumToAdd = {id: id, name: name};
    this.alben.push(albumToAdd);
    console.log(this.alben);
  }
  addToGigs(date: string, name: string){
    const gigsToAdd = {date: date, name: name};
    this.gigs.push(gigsToAdd);
    console.log(this.gigs);
  }

  // New 
  pushSongs(){
    return this.songs;
  }

  
  pushAlben(): AlbumTableItem[]{
    return this.alben;
  }
  pushGigs(): GigsTableItem[]{
    return this.gigs;
  }
}

