import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styles: []
})
export class FournisseursComponent implements OnInit {

  constructor(private crudService: CrudService,private authService: AuthService) { }

  ngOnInit() {
    this.getFournisseurs();
  }

  getFournisseurs(){
    this.crudService.getItems('fournisseurs/').subscribe(
      data =>{
        console.log(data);
      },error => {
        console.log(error);
        this.authService.logout();
      }
    )
  }

}
