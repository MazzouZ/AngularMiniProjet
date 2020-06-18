import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user) {
    return this.http.post(this.url + 'api/token/', user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  register(user) {
    return this.http.post(this.url + 'api/register/', user);
  }

  saveToken(jwToken) {
    localStorage.setItem('token', 'Bearer ' + jwToken);
  }

  loadToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated(){
    return !(this.loadToken() == null);
  }
}
