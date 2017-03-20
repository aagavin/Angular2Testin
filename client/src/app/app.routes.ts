import { Routes } from '@angular/router';
import { MovieViewModule } from './movie-view/movie-view.module';

export const AppRoutes: Routes = [
	{ path: 'dash', loadChildren: 'app/movie-view/movie-view.module#MovieViewModule' },
	{ path: '**', redirectTo: '/' },
]