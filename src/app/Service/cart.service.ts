import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpservice : HttpService
  ) { }

  getCartCount(){
    return this.httpservice.get('api/Cart/GetBookCount');
  }
  addtoCart(data){
    return this.httpservice.post('api/Cart',data);
  }
  getCartBok(email){
    return this.httpservice.get('api/Cart/getcartbookemail?email='+email);
  }
  deleteFromCart(id) {
    debugger
    return this.httpservice.delete('api/Cart?id='+id);
  }
  updateCartBook(result){
    debugger;
  return this.httpservice.post('api/Cart/cartupdate',result);
}

}

