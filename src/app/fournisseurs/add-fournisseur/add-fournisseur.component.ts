import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CrudService} from '../../services/crud.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import {FournisseurElement} from '../fournisseurs.component';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFournisseurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FournisseurElement,
              private crudService: CrudService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);


  public addFournisseur() {
    this.crudService.addItem('fournisseurs', this.data);
    this._snackBar.open('Element Created', '', {
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
