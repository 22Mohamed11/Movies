import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isScrolled = false;
  isLogged :boolean = false;
  isNavbarCollapsed = true;

  //scroll event and change navbar color
@HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  constructor(private _AuthService:AuthService ){ }

  ngOnInit(): void {

    this._AuthService.currentUser.subscribe(() => {
      if(this._AuthService.currentUser.getValue() != null){
        this.isLogged = true;
      }
      else{
        this.isLogged = false;
      }
    })
  }
  isLogout(){
    this._AuthService.logout();
  }
}
