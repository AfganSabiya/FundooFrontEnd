import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { Note } from 'src/app/model/notesmode.model';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  [x: string]: any;
  @Input() inputdata: any;
  @Input() note:any;
  @Input() notes: Note = new Note();
 
  constructor(
    private noteservice: NoteService,
    private snackbar: MatSnackBar
  ) { }
  ngOnInit() 
  { }
  
  notify(event,id) {
  debugger;
  switch(event['name']){
    case 'archive' :
    this.archive(id);
    break;
    case 'color' :
      this.setColor(id,event.value);
    break;
  }
}
private archive(id: any){
  debugger;
  console.log(this.notes.id);
  this.noteservice.archive(id).subscribe((result) => {
  this.snackbar.open('Archive Sucessfully', 'Dismiss', { duration: 3000 });
  });
}
private  setColor(id: any, event:any)
{
  this.noteservice.setColor(id, event).subscribe(Response=>
  {
    console.log(Response);
    this.snackbar.open('Colored Sucessfully','dismiss', { duration: 4000 });
  },
  (error)=>{
    console.log('error :', error );
      this.snackbar.open('colors Failed', '', { duration: 4000 });
  })
}

}
