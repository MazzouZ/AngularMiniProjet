import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CrudService} from '../../services/crud.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditFournisseurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private crudService: CrudService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  public editFournisseur() {
    this.crudService.editItem('fournisseurs', this.data.fournisseur.id, this.data.fournisseur);
    this._snackBar.open('Element Modified', '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'snackbarEdit'
    });
  }

}
