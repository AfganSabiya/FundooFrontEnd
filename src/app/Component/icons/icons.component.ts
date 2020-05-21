import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notes:any;
@Input() note:Note=new Note();
  constructor(private noteService:NoteService,private snackbar:MatSnackBar) { }
  ngOnInit()
   {}
   isArchive()
  {
  debugger;
  console.log(this.notes.id);
  this.noteService.archive(this.notes.id).subscribe((result) => {
  this.snackbar.open('Archive Sucessfully', 'Dismiss', { duration: 3000 });
  });
   
  }
}