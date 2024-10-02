import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingTv:any[] = [];

  constructor( private _MoviesService: MoviesService) {}
  ngOnInit() {
    this._MoviesService.getMovies('tv').subscribe( data => {
      this.trendingTv = data.results;
    });
  }


}
