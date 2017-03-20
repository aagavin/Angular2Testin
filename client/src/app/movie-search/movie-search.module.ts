import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MovieSearchComponent,
    MovieListComponent
  ],
  exports: [ MovieSearchComponent ]
})
export class MovieSearchModule { }
