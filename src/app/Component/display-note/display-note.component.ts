import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() note: any;
  @Input() notes: Note = new Note();
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  time = "8:00 AM";
  repeat = "daily";
  day = "Today";
  constructor(
    private noteservice: NoteService,
    private snackbar: MatSnackBar
  ) { }
  ngOnInit() { }

  iconEvent(event, id) {
    debugger;
    switch (event['name']) {
      case 'archive':
        this.archive(id);
        break;
      case 'color':
        this.setColor(id, event.value);
        break;
      case 'trash':
         this.UpdateTrash(id);
        console.log("goingtrash");
        break;
      case 'deleteforever':
        this.deleteForever(id);
        console.log("deleting forever");
        break;
      case 'Restore':
        this.restore(id);
        console.log("restoring");
        break;
    }
  }
  private archive(id: any) {
    console.log(this.notes.id);
    this.noteservice.archive(id).subscribe((result) => {
      this.snackbar.open('Archive Sucessfully', 'Dismiss', { duration: 3000 });
    });
  }

  private setColor(id: any, event: any) {
    this.noteservice.setColor(id, event).subscribe(Response => {
      console.log(Response);
      this.snackbar.open('Colored Sucessfully', 'dismiss', { duration: 4000 });
    },
      (error) => {
        console.log('error :', error);
        this.snackbar.open('colors Failed', '', { duration: 4000 });
    });
  }
  
  private restore(id: any) {
    this.noteservice.restoreFromTrash(id).subscribe(Response => {
      console.log(Response);
      this.snackbar.open('Restore delete note','dismiss',{ duration: 4000 });
    },
    (error) => {
      console.log('error :', error);
      this.snackbar.open('Restoring Note failed', '', { duration: 4000 });
    });

  }

  private deleteForever(id) {
    this.noteservice.deleteNote(id).subscribe(Response => 
    {
      console.log(Response);
      this.snackbar.open('Note deleted forever','dismiss',{ duration: 4000 });
    },
    (error) => {
      console.log('error :', error);
      this.snackBar.open('error in deleting note', '', { duration: 4000 });
    });
  }

  private UpdateTrash(id) {
    this.noteservice.sendToTrash(id).subscribe((result) => {
      console.log('response', result);
      this.snackBar.open('Note sent to trash', 'Dismiss', { duration: 4000 });
    },
      (error) => {
        console.log('error :', error);
        this.snackBar.open('error in sending to trash', '', { duration: 4000 });
      });
  }

}
