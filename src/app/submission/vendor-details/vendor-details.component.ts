import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendorDetailsForm!: FormGroup;
  constructor(private _router?: Router) { }

  ngOnInit(): void {
    this.vendorDetailsForm = new FormGroup({
      submissionDate: new FormControl(''),
      vendorContactName: new FormControl(''),
      vendorContactEmail: new FormControl(''),
      vendorContactphone: new FormControl(''),
      vendorCompany: new FormControl('')

    });
  
  }

  onSubmit(vendorDetailsForm: FormGroup) {
    console.log('Valid?', vendorDetailsForm.valid); // true or false
    console.log('submissionDate', vendorDetailsForm.value.submissionDate);
    console.log('vendorContactName', vendorDetailsForm.value.vendorContactName);
    console.log('vendorContactEmail', vendorDetailsForm.value.vendorContactEmail);
    console.log('vendorContactPhone', vendorDetailsForm.value.vendorContactPhone);
    console.log('vendorCompany', vendorDetailsForm.value.vendorCompany);


    this._router?.navigate(['/submissions/add/contract-details']);
  }
}
