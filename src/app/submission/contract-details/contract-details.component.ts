import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  contractDetailsForm!: FormGroup;
  constructor(private _router?: Router) { }

  ngOnInit(): void {
    this.contractDetailsForm = new FormGroup({
      implementationPartner: new FormControl(''),
      clientContactName: new FormControl(''),
      clientContactEmail: new FormControl(''),
      clientContactPhone: new FormControl(''),
      contractDuration: new FormControl(''),
      payRateHour: new FormControl('')
  });

}

onSubmit(contractDetailsForm: FormGroup) {
  console.log('Valid?', contractDetailsForm.valid); // true or false
  console.log('Implementationpartner', contractDetailsForm.value.implementationpartner);
  console.log('contractContactName', contractDetailsForm.value.clientContactName);
  console.log('contractContactEmail', contractDetailsForm.value.clientContactEmail);
  console.log('contractContactPhone', contractDetailsForm.value.clientContactPhone);
  console.log('contractduration', contractDetailsForm.value.contractDuration);
  console.log('payratehour', contractDetailsForm.value.payRateHour);


  this._router?.navigate(['/submissions/add/submission-success']);
}
}
