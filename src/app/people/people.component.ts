import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';
  trendingPeople:any[] = [];
  searchText: string = '';
  filteredPeople: any[] = [];

  constructor(private _MoviesService: MoviesService, private _SearchService: SearchService) { }

  ngOnInit() {
    this._MoviesService.getMovies('person').subscribe(data => {
      this.trendingPeople = data.results.slice(0, 16);
      this.filterPeople();
    });

    this._SearchService.currentSearchText.subscribe(searchText => {
      this.searchText = searchText;
      this.filterPeople();
    });
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
