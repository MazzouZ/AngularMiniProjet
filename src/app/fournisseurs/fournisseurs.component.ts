import {Component, OnInit, ViewChild} from '@angular/core';
import {CrudService} from '../services/crud.service';
import {AuthService} from '../services/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MededitDialogeComponent} from '../medicaments/mededit-dialoge/mededit-dialoge.component';
import {MedaddDialogeComponent} from '../medicaments/medadd-dialoge/medadd-dialoge.component';
import {AddFournisseurComponent} from './add-fournisseur/add-fournisseur.component';
import {EditFournisseurComponent} from './edit-fournisseur/edit-fournisseur.component';

export interface FournisseurElement {
  id: number
  nom: string;
  email: string;
  adresse: string;
  telephone: string;
}

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styles: []
})
export class FournisseursComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'email', 'adresse', 'telephone','Actions'];
  dataSource = new MatTableDataSource<FournisseurElement>();

  constructor(private crudService: CrudService, private authService: AuthService,
              public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getFournisseurs();

  }

  getFournisseurs() {
    this.crudService.getItems('fournisseurs').subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        let listMed: FournisseurElement[] = data;
        this.dataSource = new MatTableDataSource();
        this.dataSource = new MatTableDataSource(listMed);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.log(error);
        this.authService.logout();
      }
    );
  }

  //---------------------------------------------------------------------
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //---------------------------------------------------------------------
  openModifyDialog(row) {
    const dialogRef = this.dialog.open(EditFournisseurComponent, {
      width: '500px',
      data: {fournisseur: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        this.getFournisseurs();
      }, 1000);
    });
  }

//---------------------------------------------------------------------
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddFournisseurComponent, {
      width: '500px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        this.getFournisseurs();
      }, 1000);
    });
  }

//---------------------------------------------------------------------
  deleteOrg(row) {
    this.crudService.deleteItem('fournisseurs', row.id);
    setTimeout(() => {
      this.getFournisseurs();
    }, 1000);
    this._snackBar.open('Element Deleted', '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['snackbarDelete']
    });
  }
}
