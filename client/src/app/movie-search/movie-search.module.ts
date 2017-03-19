import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MovieSearchComponent
  ],
  exports: [ MovieSearchComponent ]
})
export class MovieSearchModule { }
