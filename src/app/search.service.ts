import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor( ) { }
  private searchTextSource = new BehaviorSubject<string>('');
  currentSearchText = this.searchTextSource.asObservable();

  updateSearchText(text: string) {
    this.searchTextSource.next(text);
  }
}
