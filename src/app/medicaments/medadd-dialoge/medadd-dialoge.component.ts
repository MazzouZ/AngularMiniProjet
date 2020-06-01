import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MedicamentElement} from 'src/app/medicaments/medicaments.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CrudService} from 'src/app/services/crud.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-medadd-dialoge',
  templateUrl: './medadd-dialoge.component.html',
  styleUrls: ['./medadd-dialoge.component.css']
})
export class MedaddDialogeComponent implements OnInit {

  fournisseur : any;

  constructor(public dialogRef: MatDialogRef<MedaddDialogeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MedicamentElement,
              private crudService: CrudService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getfour()
  }

  formControl = new FormControl('', [
    Validators.required
  ]);


  public addMed() {
    this.crudService.addItem('medicaments', this.data);
    
  }

  public getfour()
  {
    this.crudService.getItems('fournisseurs').subscribe(
      data=>{this.fournisseur=data}
    );
  }

  submit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
