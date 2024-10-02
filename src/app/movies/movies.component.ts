import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] = [];

  constructor( private _MoviesService:MoviesService){ }
  ngOnInit() {
    this._MoviesService.getMovies('movie').subscribe( data => {
      this.trendingMovies = data.results;
    });
  }

}
