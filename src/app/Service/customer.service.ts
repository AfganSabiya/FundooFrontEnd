import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpservice : HttpService
  ) { }

  getcustomerdetails(){
    debugger
    return this.httpservice.get('api/Customer');
  }

  addcustomerdetails(data){
    debugger
    return this.httpservice.post('api/Customer/Addcustomer',data);
  }

 
}
