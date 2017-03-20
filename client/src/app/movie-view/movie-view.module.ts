import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieViewRoutingModule } from './movie-view-routing.module';
import { MovieViewComponent } from './components/movie-view/movie-view.component';

import { MovieService } from './services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    MovieViewRoutingModule
  ],
  declarations: [MovieViewComponent],
  bootstrap: [MovieViewComponent],
  providers: [MovieService]
})
export class MovieViewModule { }
