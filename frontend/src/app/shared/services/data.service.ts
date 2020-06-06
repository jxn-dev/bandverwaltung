import { Injectable } from '@angular/core';
import { SongTableItem } from 'src/app/components/songs/song-table/song-table-datasource';
import { AlbumTableItem } from 'src/app/components/songs/album-table/album-table-datasource';
import { GigsTableItem } from 'src/app/components/gigs/gigs-table/gigs-table-datasource';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  songs: SongTableItem[] = [
    { id: 1, name: 'Lonely Stranger', album: 'Delusion' },
    { id: 2, name: 'Springtide', album: 'Delusion' },
    { id: 3, name: 'Pressure Kills', album: 'Delusion' },
    { id: 4, name: 'Free Days', album: 'Delusion' },
    { id: 5, name: 'Delusion', album: 'Delusion' },
    { id: 6, name: 'The Path', album: 'Delusion' },
  ];
  alben: AlbumTableItem[] = [
    { id: 1, name: 'Delusion' },
    { id: 2, name: 'Test Name' },
  ];
  gigs: GigsTableItem[] = [
    { date: '05/12/2020', name: 'Download Festival' },
    { date: '05/13/2020', name: 'Biker Festival Balzers' },
    { date: '05/14/2020', name: 'BandxOst 2k19' },
    { date: '05/15/2020', name: 'OpenHair Metalfestival' },
  ];

  private songSubject: BehaviorSubject<SongTableItem[]>;
  public songObservable: Observable<any>;

  private albumSubject: BehaviorSubject<AlbumTableItem[]>;
  public albumObservable: Observable<any>;

  private gigsSubject: BehaviorSubject<GigsTableItem[]>;
  public gigsObservable: Observable<any>;

  constructor() {
    this.songSubject = new BehaviorSubject(this.songs);
    this.songObservable = this.songSubject.asObservable();

    this.albumSubject = new BehaviorSubject(this.alben);
    this.albumObservable = this.albumSubject.asObservable();

    this.gigsSubject = new BehaviorSubject(this.gigs);
    this.gigsObservable = this.gigsSubject.asObservable();
  }
  addToSongs(id: number, name: string, album: string) {
    const songToAdd = { id: id, name: name, album: album };
    this.songs.push(songToAdd);
    this.songSubject.next(this.songs);
  }
  addToAlbum(id: number, name: string) {
    const albumToAdd = { id: id, name: name };
    this.alben.push(albumToAdd);
    this.albumSubject.next(this.alben);
  }
  addToGigs(date: string, name: string) {
    const gigsToAdd = { date: date, name: name };
    this.gigs.push(gigsToAdd);
    this.gigsSubject.next(this.gigs);
  }
}

