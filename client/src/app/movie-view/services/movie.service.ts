import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {

  constructor(private _http: Http) { }

  public addMovie(id: String): void {
    this._http.post('/api/add/' + id, null).subscribe(
      data => { },
      (err) => console.log(err),
      () => console.log('done')
    )
  }

}
