import { Component, OnInit,Input} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  popup: boolean = false; 
  notesmode: Note = new Note();
  @Input() note : any;
  constructor(
    private NoteService:NoteService,  
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  noteopen(){
    this.popup=true;
    this.popup=false;
  }
  
   
  }