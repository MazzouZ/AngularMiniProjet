import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';;

import { AppComponent } from './app.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MedaddDialogeComponent } from './medicaments/medadd-dialoge/medadd-dialoge.component';
import { MededitDialogeComponent } from './medicaments/mededit-dialoge/mededit-dialoge.component';
import { FouraddDialogeComponent } from './FourDialoge/fouradd-dialoge/fouradd-dialoge.component';
import { FoureditDialogeComponent } from './FourDialoge/fouredit-dialoge/fouredit-dialoge.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule, MatSortModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {LoginComponent} from './login/login.component';
import {FournisseursComponent} from './fournisseurs/fournisseurs.component';
import {MedicamentsComponent} from './medicaments/medicaments.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component';
import { AddFournisseurComponent } from './fournisseurs/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseurs/edit-fournisseur/edit-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicamentsComponent,
    FournisseursComponent,
    NavbarComponent,
    MedaddDialogeComponent,
    MededitDialogeComponent,
    FouraddDialogeComponent,
    FoureditDialogeComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
            {path: 'medicaments', component: MedicamentsComponent},
            {path: 'fournisseurs', component: FournisseursComponent},
            {path: '', redirectTo: 'medicaments', pathMatch: 'full'},
            {path: '**', redirectTo: 'medicaments'}
        ]),
        FormsModule,
        HttpClientModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatChipsModule,
        MatSortModule,
        MatButtonModule,
        MatSelectModule,
        ReactiveFormsModule,

    ],
  providers: [],
  entryComponents:[MedaddDialogeComponent,MededitDialogeComponent,AddFournisseurComponent,EditFournisseurComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
