import { Routes } from '@angular/router';
import { MovieViewComponent } from './movie-view/components/movie-view/movie-view.component';
import { MovieSearchComponent } from './movie-search/movie-search/movie-search.component';

export const AppRoutes: Routes = [
	{ path: '**', redirectTo: '/' },
	{ path: '', component: MovieSearchComponent }
]