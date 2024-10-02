import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  id:string = '';
  movieDetails: any = {};
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){ }
  
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMovieDetails('tv',this.id).subscribe((data) => {
      this.movieDetails = data;
  })
  }
}
