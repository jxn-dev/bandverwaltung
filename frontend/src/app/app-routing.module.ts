import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from 'src/app/components/songs/songs.component';
import { GigsComponent } from 'src/app/components/gigs/gigs.component';
import { PhotosComponent } from 'src/app/components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { SongsAddComponent } from './components/songs/songs-add/songs-add.component';
import { AlbumAddComponent } from './components/songs/album-add/album-add.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'gigs', component: GigsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'songs-add', component: SongsAddComponent},
  {path: 'album-add', component: AlbumAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
