import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
export interface ISubmission {
  submissionDate: string;
  vendorCompany: string;
  vendorContactEmail: string;
  vendorContactPhone: string;
  implementationPartner: string;
  client: string;
  rate: number;
  contactDuration: number;

}

@Component({
  selector: 'app-search-submission',
  templateUrl: './search-submission.component.html',
  styleUrls: ['./search-submission.component.css']
})
export class SearchSubmissionComponent  {

  rowDataA =  [
    { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
    { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
   { submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6},
  ];

  columnDefs: ColDef[] = [
    { field: 'submissionDate' },
   { field: 'vendorCompany' },
   { field: 'vendorContactEmail' },
   { field: 'vendorContactPhone' },
   { field: 'implementationPartner' },
   { field: 'client' },
   { field: 'rate' },
   { field: 'contactDuration' }];
   
  // constructor() { }

  // ngOnInit(): void {
  //   //this.rowDataA.push({ submissionDate: '30-JUL-2023', vendorCompany: 'IDC', vendorContactEmail: 'idc.y@idc.com', vendorContactPhone: '899-788-7808',implementationPartner: 'TCS',client: 'JPMC',rate: 70,contactDuration: 6});
  //   //this.rowDataA = this.rowDataA.splice(0);
  // }
  

  search(e: FormDataEvent) {
    e.preventDefault();
    console.log(e.formData);
  }
}
