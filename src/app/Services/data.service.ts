import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<any>('20%');
  currentMessage = this.messageSource.asObservable();
  private margin = new BehaviorSubject('2%');
  shareMargin = this.margin.asObservable();

  private search = new BehaviorSubject<any>('');
  public searchnote = this.search.asObservable();

  private textsearchmesaage = new BehaviorSubject<any>(''); 
   sharingsearchMessage = this.textsearchmesaage.asObservable();
 
  constructor() { }
  changegridMessage(message) {
    this.messageSource.next(message);
  }
  updateMargin(value) {
    this.margin.next(value);
  }
  
  searchnotemessage(note){
this.search.next(note);
  }

  UpdateSearchMessage(textmessage){
    this.textsearchmesaage.next(textmessage);
  }
}