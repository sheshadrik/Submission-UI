import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ISubmission } from '../search-submission/search-submission.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-submission-results',
  templateUrl: './submission-results.component.html',
  styleUrls: ['./submission-results.component.css'],
})
export class SubmissionResultsComponent {
  //@ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  //@Input()
  // rowData = [
  //   { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
  //   { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
  //  { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
  // ];
  // public columnDefs: ColDef[] = [
  //   { field: 'submissionDate' },
  //  { field: 'vendorCompany' },
  //  { field: 'vendorContactEmail' },
  //  { field: 'vendorContactPhone' },
  //  { field: 'implementationPartner' },
  //  { field: 'client' },
  //  { field: 'rate' },
  //  { field: 'contactDuration' }];
  //public rowData: ISubmission[] | null = null;
 
  public rowSelection: 'single' | 'multiple' = 'single';
  private gridApi!: GridApi<ISubmission>;
  //@ViewChildren(AgGridAngular) agGrid!: AgGridAngular;
  columnDefs: ColDef[] = [
    { field: 'submissionDate' },
   { field: 'vendorCompany' },
   { field: 'vendorContactEmail' },
   { field: 'vendorContactPhone' },
   { field: 'implementationPartner' },
   { field: 'client' },
   { field: 'rate' },
   { field: 'contactDuration' }];
   rowData =  [
    { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
    { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
   { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
  ];

  constructor() { }

  // ngOnInit(): void {
  //  // this.rowData = this.rowDataA;
  //  console.log(this.rowData);
  //  //this.rowData = this.rowData.splice(0);
  //  //this.agGrid.api.setRowData(this.rowData);
  //  //this.gridApi.setRowData(this.rowData);
  // }

  // onGridReady(params: GridReadyEvent<ISubmission>) {
  //   this.gridApi = params.api;
  // }
}
