import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { DatasharingService } from 'src/app/Service/datasharing.service';
import { CartModel } from 'src/app/Model/cartmodel';
import { BookService } from 'src/app/Service/book.service';
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
    private bookservice : BookService
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

deleteFromCart(bookID){
debugger;
this.cartmodel.cartID = bookID;
this.cartservice.deleteFromCart(bookID).subscribe(
 Response =>{
  this.getcartBookEmail();
  })
}

placeOrder(){
  debugger;
  this.showCustomerDetails=true;
  for (let i = 0; i < this.allcartbooks['length']; i++) {
  const data={
    email: localStorage.getItem('Email'),
    cartID: this.allcartbooks[i].cartID,
    bookID: this.allcartbooks[i].bookID,
    selectBookCount: this.allcartbooks[i].selectBookCount
  }
  this.cartservice.updateCartBook(data).subscribe(Response => {
    console.log(Response);
    this.allcartbooks=Response['result'];
   //  this.getCustomers();
   }, error => {
   // this.getCustomers();
   })
}
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

  
