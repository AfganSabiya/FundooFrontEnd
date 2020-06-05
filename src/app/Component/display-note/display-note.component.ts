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
  @Input() inputnote: any;
  @Input() trash:boolean=false;
  @Input() archiveinput:boolean=false;
  @Input() notes: Note = new Note();
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  
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
      case 'unarchive':
        this.unArchive(id);
        break;
      case 'color':
        this.setColor(id, event.value);
        break;
      case 'trash':
         this.DeleteNotegotoTrash(id);
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
      default:
        this.notify.emit({ id: id, name: event.name });
        break;
    }
  }
  private archive(id) {
    this.noteservice.archive(id).subscribe((result) => {
      this.notify.emit({name:'getAllNotes'})
      this.snackbar.open('Archive Sucessfully', 'Dismiss', { duration: 3000 });
    });
  }
  private unArchive(id: any){
    this.noteservice.unarchive(id).subscribe((result) => {
      this.notify.emit({name:'getAllNotes'})
         this.snackbar.open('Unarchive Sucessfully','dismiss', { duration: 4000 });
     })
  }
  private setColor(id: any, event: any) {
    this.noteservice.setColor(id, event).subscribe(Response => {
      console.log(Response);
      this.notify.emit({name:'getAllNotes'})
      this.snackbar.open('Colored Sucessfully', 'dismiss', { duration: 4000 });
    },
      (error) => {
        console.log('error :', error);
        this.snackbar.open('colors Failed', '', { duration: 4000 });
    });
  }
  private DeleteNotegotoTrash(id) {
    this.noteservice.sendToTrash(id).subscribe((Response) => {
      this.notify.emit({name:'getAllNotes'})
       this.snackbar.open('Note sent to trash', 'Dismiss', { duration: 4000 });
      console.log(Response);
    
    },
      (error) => {
        console.log('error :', error);
        this.snackbar.open('error in sending to trash', '', { duration: 4000 });
      });
  }
  private restore(id: any) {
    this.noteservice.restoreFromTrash(id).subscribe(Response => {
      this.notify.emit({name:'getAllNotes'})
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
      this.notify.emit({name:'getAllNotes'})
      console.log(Response);
      this.snackbar.open('Note deleted forever','dismiss',{ duration: 4000 });
    },
    (error) => {
      console.log('error :', error);
      this.snackbar.open('error in deleting note', '', { duration: 4000 });
    });
  }
}
