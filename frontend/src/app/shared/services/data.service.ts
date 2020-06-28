import { Injectable } from '@angular/core';
import { SongTableItem } from 'src/app/components/songs/song-table/song-table-datasource';
import { AlbumTableItem } from 'src/app/components/songs/album-table/album-table-datasource';
import { GigsTableItem } from 'src/app/components/gigs/gigs-table/gigs-table-datasource';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { SongsModel } from '../models/songs/songs.model';
import { AlbumsModel } from '../models/albums/albums.model';
import { GigsModel } from '../models/gigs/gigs.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  songsData: SongsModel[];
  albenData: AlbumsModel[];
  gigsData: GigsModel[];
  readonly rootURL = 'http://localhost:55033/api';

  private songSubject: BehaviorSubject<SongsModel[]>;
  public songObservable: Observable<any>;

  private albumSubject: BehaviorSubject<AlbumsModel[]>;
  public albumObservable: Observable<any>;

  private gigsSubject: BehaviorSubject<GigsModel[]>;
  public gigsObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.songSubject = new BehaviorSubject(this.songsData);
    this.songObservable = this.songSubject.asObservable();

    this.albumSubject = new BehaviorSubject(this.albenData);
    this.albumObservable = this.albumSubject.asObservable();

    this.gigsSubject = new BehaviorSubject(this.gigsData);
    this.gigsObservable = this.gigsSubject.asObservable();
  }
  addToSongs(id: number, name: string, album: AlbumsModel) {
    const songToAdd = { SongId: id, SongName: name, AlbumName: album };
    this.songsData.push(songToAdd);
    this.songSubject.next(this.songsData);
    this.postSongDetail(songToAdd);
  }
  addToAlbum(id: number, name: string) {
    const albumToAdd = { AlbumId: id, AlbumName: name };
    this.albenData.push(albumToAdd);
    this.albumSubject.next(this.albenData);
    this.postAlbumDetail(albumToAdd);
  }
  addToGigs(id: number, date: string, name: string) {
    const gigsToAdd = { GigId: id, GigDate: date, GigName: name };
    this.gigsData.push(gigsToAdd);
    this.gigsSubject.next(this.gigsData);
    this.postGigDetail(gigsToAdd);
  }
  postSongDetail(data: SongsModel){
    this.http.post(this.rootURL + '/Song', data);
  }
  postAlbumDetail(data: AlbumsModel){
    this.http.post(this.rootURL + '/Album', data);
  }
  postGigDetail(data: GigsModel){
    this.http.post(this.rootURL + '/Gig', data);
  }
  refreshTables(){
    this.http.get(this.rootURL + '/Song')
      .toPromise()
      .then(res =>
        this.songsData = res as SongsModel[]
      );
    this.http.get(this.rootURL + '/Album')
      .toPromise()
      .then(res =>
        this.albenData = res as AlbumsModel[]
      );
    this.http.get(this.rootURL + '/Gig').toPromise().then(res => this.gigsData = res as GigsModel[]);
  }
}

