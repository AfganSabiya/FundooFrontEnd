import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
allreminderList:any=[];
  constructor(
    private noteservice:NoteService
  ) { }

  ngOnInit() {
    this.getAllReminderList();
  }
getAllReminderList()
{
  this.noteservice.getRemainderlist().subscribe(
    Response => {
      this.allreminderList=Response;
      console.log(Response);
    }
  );
}
}
