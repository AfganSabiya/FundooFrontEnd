import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  allArchiveListNotes: any=[];
  constructor(
    private noteservice: NoteService
  ) { }
  ngOnInit() {
    this.getAllArchiveList();
  }
getAllArchiveList(){
this.noteservice.getArchiveList().subscribe(
  Response =>{
    this.allArchiveListNotes = Response;
    console.log(Response);
  })
}
}
