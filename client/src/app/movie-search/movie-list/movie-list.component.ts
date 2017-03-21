import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Http } from '@angular/http';
import { MovieService } from '../../movie-view/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input()
  public query: String;

  private movies: Array<Object>;

  constructor(private _http: Http, private _movieService: MovieService) {
    this.movies = []
  }

  ngOnInit() { }


  ngOnChanges(changes: SimpleChanges): void {
    let query: String = typeof this.query !== 'undefined' ? this.query : '';
    console.log('the query in list is: '+query);
    
    if (query != '') {
      this._http.get('/api/search?q=' + query).subscribe(
        (data) => { this.movies = data.json() },
        (err) => console.log(err),
        () => console.log('done loading movie search')
      );
    }
    else{
      this.movies = [];
    }


  }


  private addMovie(movieId: String):void{
    this._movieService.addMovie(movieId);

    this.movies = this.movies.filter(movie =>{
      return movie['id'] !== movieId;
    });

  }


}

