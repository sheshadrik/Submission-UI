import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSubmissionComponent } from './search-submission/search-submission.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';


const routes: Routes = [
    {
      path: 'search',
      component: SearchSubmissionComponent
    },
    {
    path: '', redirectTo: 'search', pathMatch: 'full'
    },
    {
      path: 'add',
      children: [
        {path: 'vendor-details', component: VendorDetailsComponent},
        {path: 'contract-details', component: ContractDetailsComponent},
        { path: '', pathMatch: 'full', redirectTo: 'vendor-details'}
      ]
  
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SubmissionRoutingModule { }