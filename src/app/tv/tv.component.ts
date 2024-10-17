import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingTv:any[] = [];
  searchText: string = '';
  filteredTv: any[] = [];

  constructor( private _MoviesService: MoviesService , private _SearchService:SearchService) {}
  ngOnInit() {
    this._MoviesService.getMovies('tv').subscribe( data => {
      this.trendingTv = data.results;
      this.filterTv();
    });

    this._SearchService.currentSearchText.subscribe(searchText => {
      this.searchText = searchText;
      this.filterTv();
    });
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
}
