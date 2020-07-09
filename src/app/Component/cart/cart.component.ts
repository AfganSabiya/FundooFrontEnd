import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { DatasharingService } from 'src/app/Service/datasharing.service';
import { CartModel } from 'src/app/Model/cartmodel';
import { BookService } from 'src/app/Service/book.service';
import { CustomerService } from 'src/app/Service/customer.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  email: any;
  allcartbooks:any[];
  allbook:any;
  count:any;
 
  showCustomerDetails = false;
  cartmodel :  CartModel = new  CartModel();
  bag: any[];
  constructor(
    private cartservice : CartService,
    private datasharing : DatasharingService,
    private bookservice : BookService,
    private customerservice : CustomerService
   ) {}

  ngOnInit(): void {
   this.getcartCount();
   this.getcartBookEmail();
  }

 getcartCount(){
   this.cartservice.getCartCount().subscribe(
     Response =>{
       this.count = Response['result'];
     })
 }

getcartBookEmail()
{
  this.email = localStorage.getItem('Email');
  this.cartservice.getCartBok(this.email).subscribe(
    Response =>
    {
      this. allcartbooks = Response['result'];
      this.datasharing.nextMessageEmBook(this.allcartbooks);
    })
}

deleteFromCart(cartID){
debugger;
this.cartmodel.bookID = cartID;
this.cartservice.deleteFromCart(cartID).subscribe(
 Response =>{
  this.getcartBookEmail();
  })
}

placeOrder(){
  debugger;
  this.showCustomerDetails=true;
  for (let i = 0; i < this.allcartbooks['a']; i++) {
  const data={
    email: localStorage.getItem('Email'),
    cartID: this.allcartbooks[i].cartID,
    bookID: this.allcartbooks[i].bookID,
    selectBookCount: this.allcartbooks[i].bookCount
  }
  debugger;
  console.log(data);
  debugger
  this.cartservice.updateCartBook(data).subscribe(Response => {
    debugger;
    console.log(Response);
   // this.allcartbooks=Response['result'];
     this.getCustomer();
   });
}
}

getCustomer(){
  debugger
  this.customerservice.getcustomerdetails().subscribe(Response=>{
    console.log(Response);
    
  })
}

DecrementFromCart(bookID,bookCount,authorName,price,bookImage,bookTitle){
  debugger;
  if(bookCount != 0 ){
    bookCount--;
    const data ={
      'bookID':bookID,
      'bookCount':bookCount,
      'authorName':authorName,
      'price':price,
      'bookImage':bookImage,
      'bookTitle':bookTitle,
      'description':"defination"
    }
    this.bookservice.updateBook(data).subscribe(Response=>{
      this.getcartBookEmail();
    })
  }
}
IncrementFromCart(bookID,bookCount,authorName,price,bookImage,bookTitle)
{
debugger;
  if(bookCount != 0){
    bookCount++;
    const data ={
      'bookID':bookID,
      'bookCount':bookCount,
      'authorName':authorName,
      'price':price,
      'bookImage':bookImage,
      'bookTitle':bookTitle,
      'description':"defination"
    }
    this.bookservice.updateBook(data).subscribe(Response=>{
      this.getcartBookEmail();
    })
  }
}
}

  
