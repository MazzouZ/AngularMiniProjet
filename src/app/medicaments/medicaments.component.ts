import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styles: []
})
export class MedicamentsComponent implements OnInit {

  constructor(private crudService: CrudService,private authService: AuthService) { }

  ngOnInit() {
    this.getMedicament();

  }

  getMedicament(){
    this.crudService.getItems('medicaments').subscribe(
      data =>{
        console.log(data);
      },error => {
        console.log(error);
        this.authService.logout();
      }
    )
  }



}
