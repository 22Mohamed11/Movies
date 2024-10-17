import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] = [];
  searchText: string = '';
  filteredMovies: any[] = [];


  constructor( private _MoviesService:MoviesService , private _SearchService:SearchService) { }
  ngOnInit() {
    this._MoviesService.getMovies('movie').subscribe( data => {
      this.trendingMovies = data.results;
      this.filterMovies();
    });

    this._SearchService.currentSearchText.subscribe(searchText => {
      this.searchText = searchText;
      this.filterMovies();
    });
  }
  filterMovies() {
    if (this.searchText === '') {
      this.filteredMovies = this.trendingMovies;
    } else {
      this.filteredMovies = this.trendingMovies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}
