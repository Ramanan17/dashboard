import { EmplocalComponent } from './components/emplocal/emplocal.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { IssueLocalOnComponent } from './components/issue-local-on/issue-local-on.component';
import { IssueLocalComponent } from './components/issue-local/issue-local.component';
import { IssuePermOnComponent } from './components/issue-perm-on/issue-perm-on.component';
import { IssuePermanentComponent } from './components/issue-permanent/issue-permanent.component';
import { OutPermComponent } from './components/out-perm/out-perm.component';
import { TableComponent } from './components/table/table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppComponent } from './app.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { OutLocalComponent } from './components/out-local/out-local.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path:'permanent/:Name',
    component:IssuePermanentComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'iperm/:Name',
    component:IssuePermOnComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'local/:id',
    component:IssueLocalComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'localOn/:id',
    component:IssueLocalOnComponent,
    canActivate:[AuthGuardService]
  },

    {
        path: 'side',
        component: SidenavComponent,
        canActivate:[AuthGuardService]
    },
    {
      path: 'table',
      component: TableComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'outl',
      component: OutLocalComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'outp',
      component: OutPermComponent,
      canActivate:[AuthGuardService]
    },
    {
      path: 'totalperm',
      component: EmployeeDetailsComponent,
      canActivate:[AuthGuardService]

    },
    {
      path: 'totalout',
      component: EmplocalComponent,
      canActivate:[AuthGuardService]
    }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
