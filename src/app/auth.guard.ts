
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{

  constructor(private _AuthService:AuthService,private _Router:Router){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._AuthService.currentUser.getValue() != null){
      return true;
    }
    else{
      this._Router.navigate(['/login']);
      return false;
    }
  }

};