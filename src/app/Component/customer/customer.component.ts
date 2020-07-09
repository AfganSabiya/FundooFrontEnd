import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/Service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
 // flag: boolean;
  @Input() showCustomerDetails:boolean;
  constructor(
    private customerservice:CustomerService
  ) { }
  name=new FormControl('', [
    Validators.required ]);
  phone= new FormControl('', [
    Validators.required ]);
    pinCode= new FormControl('', [
    Validators.required]);
  locality=new FormControl('',[Validators.required]);
  address=new FormControl('',[Validators.required]);
  city=new FormControl('',[Validators.required]);
  landmark=new FormControl('',[Validators.required]);
  type=new FormControl('',[Validators.required]);
  ngOnInit(): void {
  }
  

addCustomer(){
  debugger;
  if (this.name.valid||this.phone.valid) {
    let cust = {
      Naame: this.name.value,
      PhoneNumber: this.phone.value,
      Pincode: this.pinCode.value,
      Locality: this.locality.value,
      Address: this.address.value,
      City: this.city.value,
      LandMark: this.landmark.value,
      Type: this.type.value,
      email: localStorage.getItem('Email')
    }
    this.customerservice.addcustomerdetails(cust).subscribe(Response => {
      console.log(Response);
    })
}
}
}
