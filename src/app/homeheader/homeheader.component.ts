import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent {
  trendingMovies:any[] = [];
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService: MoviesService) {

    this._MoviesService.getMovies('movie').subscribe( data => {

      this.trendingMovies = data.results;

    });
   }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:8,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items:2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      700: {
        items: 5
      },
      800:{
        items:6
      },
      900:{
        items: 7
      },
      1170:{
        items: 8
      }
    },
    nav: true
  }

}
