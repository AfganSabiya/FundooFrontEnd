import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';
import { DatasharingService } from 'src/app/Service/datasharing.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.scss']
})
export class BookDashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () => ``);
  private _mobileQueryListener: () => void;

  cartCount:any;
  
  constructor
  (
    private route: Router, 
    private cartservice: CartService,
    private datasharing:DatasharingService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher)
     {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
  this.getcartCount();

    //this.datasharing.count.subscribe(countbooks=>this.cartCount=countbooks);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  getcartCount(){
    this.cartservice.getCartCount().subscribe(
      Response =>{
        this.cartCount = Response['result'];
       // console.log(Response);
      })
  }
 
 
}
