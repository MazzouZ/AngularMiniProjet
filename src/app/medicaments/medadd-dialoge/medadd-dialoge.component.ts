import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicamentElement } from 'src/app/medicaments/medicaments.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/services/crud.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-medadd-dialoge',
  templateUrl: './medadd-dialoge.component.html',
  styleUrls: ['./medadd-dialoge.component.css']
})
export class MedaddDialogeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MedaddDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MedicamentElement,
    private crudService:CrudService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  /*getErrorMessage() {
    return this.formControl.hasError('required') ? 'Ce champ est obligatoire' :
        this.formControl.hasError('email') ? 'Entrez un email valide !!' :
            '';
  }*/

  public addMed() {
     this.crudService.addItem('medicaments',this.data);
      this._snackBar.open('Element Created',"",{
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['snackbarSuccess']
      });
  }

  submit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
