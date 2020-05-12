import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from 'src/app/components/songs/songs.component';
import { GigsComponent } from 'src/app/components/gigs/gigs.component';
import { PhotosComponent } from 'src/app/components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'gigs', component: GigsComponent},
  {path: 'photos', component: PhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
