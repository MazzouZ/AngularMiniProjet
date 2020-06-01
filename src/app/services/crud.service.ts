import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private authService: AuthService, private _snackBar: MatSnackBar) {
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
        this._snackBar.open('Element Created', '', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snackbarSuccess']
        });
      },error => {
        console.log(error);
        this._snackBar.open('Libelle already exist ,try choosing another one', '', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['snackbarDelete']
        });
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
