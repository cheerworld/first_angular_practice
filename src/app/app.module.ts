import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent, PhotosComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
