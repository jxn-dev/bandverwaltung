import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { PhotosComponent } from './components/photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SongTableComponent } from './components/songs/song-table/song-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlbumTableComponent } from './components/songs/album-table/album-table.component';
import { GigsTableComponent } from './components/gigs/gigs-table/gigs-table.component';
import { PhotosListComponent } from './components/photos/photos-list/photos-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';
import { SongsAddComponent } from './components/songs/songs-add/songs-add.component';
import { AlbumAddComponent } from './components/songs/album-add/album-add.component';
import { GigsAddComponent } from './components/gigs/gigs-add/gigs-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    GigsComponent,
    PhotosComponent,
    MainNavComponent,
    SongTableComponent,
    AlbumTableComponent,
    GigsTableComponent,
    PhotosListComponent,
    HomeComponent,
    SongsAddComponent,
    AlbumAddComponent,
    GigsAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
