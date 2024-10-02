import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _HttpClient:HttpClient) { }

  getMovies( movieType:string):Observable<any>{

    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${movieType}?api_key=d0ee0f9047b4ca4b2604b83fb0b412ba`);
  }
  getMovieDetails(movieType:string, movieId:string):Observable<any>{

    return this._HttpClient.get(`https://api.themoviedb.org/3/${movieType}/${movieId}?api_key=d0ee0f9047b4ca4b2604b83fb0b412ba`);
  }
}
