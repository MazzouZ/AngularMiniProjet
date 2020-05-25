import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';;

import { AppComponent } from './app.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { MedaddDialogeComponent } from './medicaments/medadd-dialoge/medadd-dialoge.component';
import { MededitDialogeComponent } from './medicaments/mededit-dialoge/mededit-dialoge.component';
import { FouraddDialogeComponent } from './FourDialoge/fouradd-dialoge/fouradd-dialoge.component';
import { FoureditDialogeComponent } from './FourDialoge/fouredit-dialoge/fouredit-dialoge.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule, MatSortModule} from '@angular/material';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'medicaments', component: MedicamentsComponent},
      {path: 'fournisseurs', component: FournisseursComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
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
  ],
  providers: [],
  entryComponents:[MedaddDialogeComponent,MededitDialogeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
