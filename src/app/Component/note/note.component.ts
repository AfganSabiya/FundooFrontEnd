import { Component, OnInit, Input} from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   noteModel: Note = new Note();
   displayAllNotes: any;
  constructor
  (
    private noteservice: NoteService,
    private snackbar: MatSnackBar
  ) { }
  ngOnInit()
  { 
    this.getAllNotes();
  }
  getAllNotes(event?) 
  {
    this.noteservice.getNote().subscribe(Response => 
    {
      this.displayAllNotes = Response;
      console.log(this.displayAllNotes);
    });
  }
}