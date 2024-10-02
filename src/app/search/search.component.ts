import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  //filteredMovies:any[] = [];
  //filteredTv:any[] = [];
  //filteredPeople:any[] = [];
  //imgPrefix:string= 'https://image.tmdb.org/t/p/w500/';

  //searchQuery: string = '';

  constructor(private _MoviesService:MoviesService) { }
  // ngOnInit() {
  //   this._MoviesService.getMovies('movie').subscribe( data => {
  //     this.filteredMovies = data.results;
  //   });

  //   this._MoviesService.getMovies('tv').subscribe( data => {
  //     this.filteredTv = data.results;
  //   });

  //   this._MoviesService.getMovies('person').subscribe( data => {
  //     this.filteredPeople = data.results;
  //   });
  // }
  // onSearch() {
  //   if (this.searchQuery.trim() !== '') {
  //     this.filteredMovies = this.filteredMovies.filter(data =>
  //       data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );

  //     this.filteredTv = this.filteredTv.filter(data =>
  //       data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );

  //     this.filteredPeople = this.filteredPeople.filter(data =>
  //       data.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   } else {
  //     this.filteredMovies = [...this.filteredMovies];
  //     this.filteredTv = [...this.filteredTv];
  //     this.filteredPeople = [...this.filteredPeople];
  //   }
  // }
}
