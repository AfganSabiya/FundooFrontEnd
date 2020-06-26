import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/model/notesmode.model';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/Services/data.service';
import { Label } from 'src/app/model/labelmode.model';
import { Collaborator } from 'src/app/model/collaboratormode.model';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { CollaboratorService } from 'src/app/Services/collaborator.service';

@Component({
  selector: 'app-display-note',   
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() inputnote:any;
  @Input() trash:boolean=false;
  @Input() archiveinput:boolean=false;
  @Input() notes: Note = new Note();
  @Input() isDisplay:boolean = false ;
  @Input() labelsNote:any;
  @Input() collaboratorNote:any;
  Collaborators:any
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  @Output() labelnotify: EventEmitter<any> = new EventEmitter<any>();
  @Output() collabonotify: EventEmitter<any> = new EventEmitter<any>();
  todayString : string = new Date().toDateString();
  collaboratormode : Collaborator = new Collaborator();
  notesmode: Note = new Note();
  labelmode: Label = new Label();
  backgroundColor: string;
  width: any;
  margin: any;
  id:any;
  time = "8:00 AM";
  repeat = "daily";
  day = "Today";
  constructor(
    private collaboratorservice:CollaboratorService,
    private dataService:DataService,
    private noteservice: NoteService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
  ) { }
  ngOnInit() { 
   this.dataService.currentMessage.subscribe(message=>this.width=message);
   this.dataService.shareMargin.subscribe(message=>this.margin=message);
  }
  iconEvent(event, id) {
    debugger;
    switch (event['name']) {
      case 'archive':
        this.archive(id,event.value);
        break;
      case 'color':
        this.setColor(id, event.value);
        break;
      case 'trash':
         this.DeleteNotegotoTrash(id);
        console.log("goingtrash");
        break;
      case 'deleteforever': this.deleteForever(id);
        console.log("deleting forever");
        break;
      case 'Restore':
         this.restore(id);
        console.log("restoring");
        break;
      case 'remainder':
        this.reminder(event.value,id);
        break;
      case 'label': 
      this.addnewLabel(event.value,id);
        break;
      case 'collaborator':
        this.collaborator(event.value,id);
      default:
        this.notify.emit({ id: id, name: event.name });
        break;
    }
  }
  reminder(date,id) {
    let str: any;
    if (date != "") 
    {
      let res = new Date(date);
      str = res.toDateString();
    }
    else str = this.day;
    let dataremin= str + " " + this.time;
    if (this.isDisplay != null ) 
    this.noteservice.setRemainder(id,dataremin).subscribe(
      res=>{
        this.notify.emit({name:'getAllNotes'})
        this.snackbar.open('Added reminder', 'Dismiss', { duration: 3000 });
      }
    )
  }
  private archive(id: any,event:any) {
    this.noteservice.archive(id).subscribe((result) => {
      this.notify.emit({name:'getAllNotes'})
      this.snackbar.open('Archive Sucessfully', 'Dismiss', { duration: 3000 });
    });
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
  private deleteForever(id) 
  {
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

  OnClickEditDialogue(note)
  {
    const dialogRef = this.dialog.open(UpdateNoteComponent,
    {
      width: '40%',
      height: 'auto',
      data: { note: note},
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result=>
    {
        if(result.update)
        {
          this.noteservice.updateNote(result.update).subscribe(Response =>{
            this.notify.emit({ name: 'getAllNotes'})
          console.log(Response);
         });
        console.log(note.update);
        }
    })
  }
  deleteReminder(id){
    console.log(id);
    this.noteservice.removeReminder(id).subscribe(Response =>{
      this.notify.emit({name:'getAllNotes'})
      console.log(Response);
      this.snackbar.open('Reminder Deleted','',{duration:4000});
      location.reload();
    },
    (error)=>{
      console.log('error',error);
    });
  }

  
  addnewLabel(labelname,id) {
   //  if (labelname != null && labelname != '') 
   // this.label.LabelName= event.value.id;
   this.labelmode.labelName = labelname;
    this.labelmode.noteId = id;
    this.labelmode.email=localStorage.getItem('Email');
    this.noteservice.AddingLabel(this.labelmode).subscribe(Response => {
      console.log(Response);
      this.labelsNote=Response;
      this.labelnotify.emit({name:'getAllLabelList'})
    });
  }
  deleteLabel(id)
  {
   
    console.log(id);
    this.noteservice.DeleteLabel(id).subscribe(Response =>{
      this.labelnotify.emit({name:'getAllLabelList'})
      console.log(Response);
      this.snackbar.open('Delete label sucess','',{duration:4000});
      
  },
    (error)=>{
      console.log('error',error);
    });
  }

  collaborator(event:any,id)
  {
    this.collaboratormode.noteId= id;
    debugger;
    const dialogRef = this.dialog.open(CollaboratorComponent,
      {
        // width: '40%',
        // height: 'auto',
       // data: { collab:id,collaboraters:this.collaboratorNote},
        data: { collab:this.collaboratormode.noteId,collaboraters:this.collaboratorNote},
        
        panelClass: 'custom-dialog-container',
      });

      
      dialogRef.afterClosed().subscribe(result=>
      {
        console.log(result.collabData);
          if(result.collabData)
          {
            debugger;
            this.collaboratorservice.AddCollaborators(result.collabData).subscribe(Response =>
            {
              console.log(Response);
              this.collabonotify.emit({name:'getAllCollaboratorList'})
           });
          }
          else if(result.deleteCol){
            this.collaboratorservice.deleteCollaborator(result.deleteCol).subscribe(Response => {
              console.log(Response);
              this.collabonotify.emit({name:'getAllCollaboratorList'})
            })
          }
          else{
            if(result.collabData == undefined){
              console.log("No collabator aded");
              
            }
          }
      })
  }
// collaborator(col:any){
//   this.collaboratorservice.AddCollaborators(col).subscribe( res=> {
//     console.log(sucess);
//   })
// }
  
}

