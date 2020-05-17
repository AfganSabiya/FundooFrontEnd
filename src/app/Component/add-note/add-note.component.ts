import { Component, OnInit,Input} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit 
{
  popup: boolean = false;
  notes: Note = new Note();
  @Input() notesmode : any;
  constructor(
    private NoteService:NoteService,  
    private snackbar: MatSnackBar
  ) { }
  ngOnInit() {
  }
  clicknote(){
    this.popup = true;
  }
}