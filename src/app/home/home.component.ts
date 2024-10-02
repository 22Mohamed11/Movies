import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';


  constructor( private _MoviesService:MoviesService){ }
  ngOnInit() {
    this._MoviesService.getMovies('movie').subscribe( data => {

      this.trendingMovies = data.results.slice(0,16);

    });
    this._MoviesService.getMovies('tv').subscribe( data => {

      this.trendingTv = data.results.slice(0,16);

    });
    this._MoviesService.getMovies('person').subscribe( data => {

      this.trendingPeople = data.results.slice(0,16);

    });
  }

}
