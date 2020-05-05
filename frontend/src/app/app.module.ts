import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    GigsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
