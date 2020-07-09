import { Injectable } from '@angular/core';
import { HttpService} from './http.service';
@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(
   private httpservice : HttpService
  ) { }

  getALLBook(){
    return this.httpservice.get('api/BookStore/GetallBooks');
  }
  getcountBook(){
    return this.httpservice.get('api/BookStore');
  }
 updateBook(data){
  debugger
  return this.httpservice.post('api/BookStore/book',data);
}
}
