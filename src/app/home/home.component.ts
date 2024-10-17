import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  filteredMovies: any[] = [];
  filteredTv: any[] = [];
  filteredPeople: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService: MoviesService, private _SearchService: SearchService) { }

  ngOnInit() {
    this._MoviesService.getMovies('movie').subscribe(data => {
      this.trendingMovies = data.results.slice(0, 16);
      this.filterMovies();
    });

    this._MoviesService.getMovies('tv').subscribe(data => {
      this.trendingTv = data.results.slice(0, 16);
      this.filterTv();
    });

    this._MoviesService.getMovies('person').subscribe(data => {
      this.trendingPeople = data.results.slice(0, 16);
      this.filterPeople();
    });

    this._SearchService.currentSearchText.subscribe(searchText => {
      this.searchText = searchText;
      this.filterMovies();
      this.filterTv();
      this.filterPeople();
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

  filterTv() {
    if (this.searchText === '') {
      this.filteredTv = this.trendingTv;
    } else {
      this.filteredTv = this.trendingTv.filter(tv =>
        tv.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  filterPeople() {
    if (this.searchText === '') {
      this.filteredPeople = this.trendingPeople;
    } else {
      this.filteredPeople = this.trendingPeople.filter(person =>
        person.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
