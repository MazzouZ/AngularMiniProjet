import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicamentElement } from 'src/app/medicaments/medicaments.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mededit-dialoge',
  templateUrl: './mededit-dialoge.component.html',
  styleUrls: ['./mededit-dialoge.component.css']
})
export class MededitDialogeComponent implements OnInit {

  fournisseur : any;

  constructor(public dialogRef: MatDialogRef<MededitDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crudService:CrudService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getfour();
  }

  public getfour()
  {
    this.crudService.getItems('fournisseurs').subscribe(
      data=>{this.fournisseur=data}
    );
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  public editMed() {
    this.crudService.editItem("medicaments",this.data.medicament.id,this.data.medicament);
    this._snackBar.open('Element Modified',"",{
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'snackbarEdit'
    });
  }

}
