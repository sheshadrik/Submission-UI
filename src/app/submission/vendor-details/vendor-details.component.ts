import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendorDetailsForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.vendorDetailsForm = new FormGroup({
      submissionDate: new FormControl(''),
      vendorContactName: new FormControl('')
    });
  }

  onSubmit(vendorDetailsForm: FormGroup) {
    console.log('Valid?', vendorDetailsForm.valid); // true or false
    console.log('submissionDate', vendorDetailsForm.value.submissionDate);
    console.log('vendorContactName', vendorDetailsForm.value.vendorContactName);  
  }
}
