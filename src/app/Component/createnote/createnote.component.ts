import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
 import { FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  @Output() outputnote:EventEmitter<any> = new EventEmitter();
  displayAllNotes:object;
  Node: boolean = false;
  createNoteForm: FormGroup;
  notemodel: Note = new Note();
  color:string;
  reminder:string;
  constructor(
    private formBuilder: FormBuilder,
    private noteService:NoteService,  
    private snackbar: MatSnackBar
  ) { }
  noteopen(){
    this.Node=true;
  }
  submit(){
    this.Node = false;
  }
  ngOnInit() {
    this.createNoteForm =this.formBuilder.group({
    title:[''],
    description:[''],
    changeColor:["rgb(255,255,255)"],
  });
  }

  addNote()
  {
    if(this.createNoteForm.value.title != "" || this.createNoteForm.value.description !="" )
    {
      this.notemodel.title = this.createNoteForm.value.title;
      this.notemodel.description = this.createNoteForm.value.description;
      this.notemodel.changeColor = this.color;
      this.noteService.addNote(this.notemodel).subscribe((Response)=>{
      console.log(Response);
      this.outputnote.emit({ name : 'getNote'});
      this.snackbar.open('Note Created Sucessfully','dismiss',{duration:3000});
      this.submit();
      },
      (error) => {          
      this.snackbar.open('Error in creating note', '', { duration: 2000 });
      console.log('error response', error);
      });
    }else{
    this.submit();
    }
  }    
  addnoteIconEvent(event)
  {
    switch (event['name']){
      case 'color' : this.notemodel.changeColor=event.value;
      break;
      case 'archive':this.notemodel.archive=true
      break
      case 'remainder':this.notemodel.remainder=event.value;
    }
  }
}