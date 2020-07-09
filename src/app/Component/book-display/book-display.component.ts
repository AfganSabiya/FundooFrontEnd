import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookStoreModel } from 'src/app/Model/bookstoremodel';
import { BookService } from 'src/app/Service/book.service';
import { CartModel } from 'src/app/Model/cartmodel';
import { CartService } from 'src/app/Service/cart.service';
import { DatasharingService } from 'src/app/Service/datasharing.service';
//import { NgxSpinnerService } from 'ngx-spinner/public_api';


@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  allBooks: any[];
  totalbooks: any[];
  p: number = 1;
  email: string;
  add: boolean = false;
  bag: any[] = [];
  allCartbooks: any;
  

  book: BookStoreModel= new BookStoreModel();
  cartmodel: CartModel = new CartModel();
  @Output() pageChange: EventEmitter<number>;
 
  message: any;
  constructor(
    private bookservice : BookService,
    private cartservice : CartService,
    //private spinner: NgxSpinnerService,
    private datasharingservice : DatasharingService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCountBook();
     this.datasharingservice.sharedMessage.subscribe(Message =>this.message = Message);
  }
  check(book) {
    return sessionStorage.getItem(book);
  }
  hiddenText(books) {
    this.book.description = '';
    this.book.bookCount = 0; 
  }
  change(book) {
    this.book.description=book.description;
    this.book.bookCount = book.bookCount;
  }

  getAllBooks(){
    this.bookservice.getALLBook().subscribe(Response =>{
      this.allBooks = Response['result'];
    })
  }

  getAllCountBook(){
    this.bookservice.getcountBook().subscribe(Response =>{
      this.totalbooks = Response['result'];
    })
  }
 
  addBag(bookId){
   // this.spinner.show();
    this.cartmodel.bookID = bookId;
    this.cartmodel.email = localStorage.getItem('Email');
    this.cartmodel.selectBookCount = 1;
    this.cartservice.addtoCart(this.cartmodel).subscribe(Response =>{
    console.log(Response);
    })
  }

}
