import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const header = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginUser(usuarioAuth: any) {
    // return this.http.post(this._authUser, usuarioAuth, header);
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    // localStorage.removeItem('userLogin');
    this.router.navigate(['/login']);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

}
