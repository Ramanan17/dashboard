import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { routing } from './app.routing';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from './../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule

} from '@angular/material';

import { MatTreeModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { HttpModule } from '@angular/http';
import {AgGridModule} from 'ag-grid-angular';
import { OutLocalComponent } from './components/out-local/out-local.component';
import { OutPermComponent } from './components/out-perm/out-perm.component';
import { IssuePermanentComponent } from './components/issue-permanent/issue-permanent.component';
import { IssuePermOnComponent } from './components/issue-perm-on/issue-perm-on.component';
import { IssueLocalComponent } from './components/issue-local/issue-local.component';
import { IssueLocalOnComponent } from './components/issue-local-on/issue-local-on.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { EmplocalComponent } from './components/emplocal/emplocal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    TableComponent,
    OutLocalComponent,
    OutPermComponent,
    IssuePermanentComponent,
    IssuePermOnComponent,
    IssueLocalComponent,
    IssueLocalOnComponent,
    EmployeeDetailsComponent,
    EmplocalComponent,


    // tslint:disable-next-line:no-trailing-whitespace



  ],

  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule,
    FormsModule,
    AgmCoreModule,
    BrowserAnimationsModule,
    SharedModule,
    routing,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpModule,
    DataTablesModule




  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
