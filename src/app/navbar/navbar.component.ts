import { Component, HostListener, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() searchTextChange = new EventEmitter<string>();
  searchText: string = "";
  isScrolled = false;
  isLogged: boolean = false;
  isNavbarCollapsed = true;

  //scroll event and change navbar color
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
  }

  constructor(private _AuthService: AuthService, private _SearchService: SearchService) { }

  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(() => {
      this.isLogged = this._AuthService.currentUser.getValue() != null;
    });
  }

  isLogout() {
    this._AuthService.logout();
  }

  onSearchTextChange(value: string) {
    this.searchText = value;
    this._SearchService.updateSearchText(value);
  }
}
