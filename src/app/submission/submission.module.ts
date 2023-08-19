import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSubmissionComponent } from './search-submission/search-submission.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { SubmissionRoutingModule } from './submission-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmissionSuccessComponent } from './submission-success/submission-success.component';
import { SubmissionResultsComponent } from './submission-results/submission-results.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    SearchSubmissionComponent,
    VendorDetailsComponent,
    ContractDetailsComponent,
    SubmissionSuccessComponent,
    SubmissionResultsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule,
    SubmissionRoutingModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class SubmissionModule { }
