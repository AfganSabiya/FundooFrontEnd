import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Note } from 'src/app/model/notesmode.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   
  result:any;
     constructor(
    private dataservice : DataService
  ) { }

  ngOnInit() {
    this.dataservice.searchnote.subscribe(x=>this.result=x);
 }
}
