import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getItems(type: string) {
    return this.http.get(this.url + type+'/',
      {headers: new HttpHeaders({'Authorization': this.authService.loadToken()})});
  }

  public addItem(type: string, object: any) {
    console.log(object);
    return this.http.post(this.url + type+'/', object,
      {headers: new HttpHeaders({'Authorization': this.authService.loadToken()})}).subscribe(
      data =>{
        console.log(data);
      },error => {
        console.log(error);
      });
  }

  public editItem(type: string, id: number, object: any) {

    return this.http.put(this.url + type + '/' + id, object,
      {headers: new HttpHeaders({'Authorization': this.authService.loadToken()})}).subscribe(
      data =>{
        console.log(data);
      },error => {
        console.log(error);
      });
  }

  public deleteItem(type: string, id: number) {
    return this.http.delete(this.url + type + '/' + id,
      {headers: new HttpHeaders({'Authorization': this.authService.loadToken()})}).subscribe(
      data =>{
        console.log(data);
      },error => {
        console.log(error);
      });
  }

}
