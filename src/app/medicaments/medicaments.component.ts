import { Component, OnInit, ViewChild } from '@angular/core';
import {CrudService} from '../services/crud.service';
import {AuthService} from '../services/auth.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MededitDialogeComponent } from './mededit-dialoge/mededit-dialoge.component';
import { MedaddDialogeComponent } from './medadd-dialoge/medadd-dialoge.component';

export interface MedicamentElement {
  id : number
  libelle: string;
  categorie: number;
  prix: number;
  quantite: number;
  date : string;
  fournisseur : number;
}

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styles: []
})
export class MedicamentsComponent implements OnInit {

  displayedColumns: string[] = ['libelle', 'categorie', 'prix', 'quantite','date','Actions'];
  dataSource=new MatTableDataSource<MedicamentElement>();

  constructor(private crudService: CrudService,private authService: AuthService,
    public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getMed();

  }

  getMed(){
    this.crudService.getItems('medicaments').subscribe(
      data =>{
        console.log(data);
        // @ts-ignore
        let listMed:MedicamentElement[]=data;
        this.dataSource=new MatTableDataSource();
        this.dataSource = new MatTableDataSource(listMed);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },error => {
        console.log(error);
        this.authService.logout();
      }
    )
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
    const dialogRef = this.dialog.open(MededitDialogeComponent, {
      width: '500px',
      data: {organisation :row}
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(()=>{
        this.getMed();
      },1000);
    });
  }
//---------------------------------------------------------------------
openAddDialog(): void {
  const dialogRef = this.dialog.open(MedaddDialogeComponent, {
    width: '500px',
    data: {}
  });
  dialogRef.afterClosed().subscribe(result => {
    setTimeout(()=>{
      this.getMed();
    },1000);
  });
}
//---------------------------------------------------------------------
deleteOrg(row){
  this.crudService.deleteItem(row,row.pk);
  setTimeout(()=>{
    this.getMed();
  },1000);
  this._snackBar.open('Element Deleted',"",{
    duration: 2000,
    verticalPosition: 'top',
    panelClass: ['snackbarDelete']
  });
}




}
