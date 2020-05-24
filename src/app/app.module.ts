import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MedaddDialogeComponent } from './MedDialoge/medadd-dialoge/medadd-dialoge.component';
import { MededitDialogeComponent } from './MedDialoge/mededit-dialoge/mededit-dialoge.component';
import { FouraddDialogeComponent } from './FourDialoge/fouradd-dialoge/fouradd-dialoge.component';
import { FoureditDialogeComponent } from './FourDialoge/fouredit-dialoge/fouredit-dialoge.component';
import {MatChipsModule} from '@angular/material/chips';

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
    FoureditDialogeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'medicaments', component: MedicamentsComponent },
      { path: 'fournisseurs', component: FournisseursComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login' }
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
