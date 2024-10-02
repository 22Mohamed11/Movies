import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') != null){
      this.saveCurrentUser ()
    }
    }
  currentUser = new BehaviorSubject(null);

  saveCurrentUser (){
    let token:any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));   //behavior subject
  }

  register(formData:any):Observable <any>{
   return this._HttpClient.post('https://moveis-db.vercel.app/Register/signup',formData);
  }

  login(formData:any):Observable<any>{
    return this._HttpClient.post('https://moveis-db.vercel.app/Register/signin',formData);
  }

  logout(){
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }
}