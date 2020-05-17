import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  param: any;
  noteModel: Note = new Note();
  allNotes: any;
  constructor(
    private noteservice: NoteService,
    private activatedroute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() 
  {
    this.noteservice.getnote().subscribe(Response => 
    {
      console.log(Response);
      this.allNotes = Response;
    });
  }

}
