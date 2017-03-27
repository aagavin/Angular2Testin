import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  public searchQuery: String;
  
  constructor() { }

  ngOnInit() {}

  public movieSearch(event){
    console.log(event.target.value);
    this.searchQuery = event.target.value;
  }

}
