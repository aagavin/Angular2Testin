import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { MovieSearchModule } from './movie-search/movie-search.module';
import { MovieViewComponent } from './movie-view/movie-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
