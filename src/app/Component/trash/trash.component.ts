import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  listoftrashNotes: any=[];
  constructor(
    private noteservice: NoteService
  ) { }

  getAllTrashList(){
    this.noteservice.getTrashlist().subscribe(
      Response =>{
      this.listoftrashNotes = Response;
      console.log(Response);
    });
  }
  ngOnInit() {
    this.getAllTrashList();
    }
}
