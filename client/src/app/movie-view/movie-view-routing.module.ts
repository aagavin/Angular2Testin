import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from './components/movie-view/movie-view.component';

const routes: Routes = [
  { path: 'dash', component: MovieViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MovieViewRoutingModule { }
