import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingPeople:any[] = [];
  constructor(private _MoviesService:MoviesService){ }
  ngOnInit() {
    this._MoviesService.getMovies('person').subscribe( data => {
      this.trendingPeople = data.results.slice(0,16);
    });
  }


}
