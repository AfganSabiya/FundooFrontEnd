import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NoteService } from 'src/app/Services/note.service';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  Node: boolean = false;
  createNoteForm: FormGroup;
  notesmode: Note = new Note();
  color:string;
  isarchive=0;
  image:string;
  constructor(
    private formBuilder: FormBuilder,
    private noteService:NoteService,  
    private snackbar: MatSnackBar
  ) { }
  noteopen(){
    this.Node=true;
  }
  ngOnInit() {
    this.createNoteForm =this.formBuilder.group({
      title:[''],
      description:[''],
    })
  }
  addNote(title,description){
    debugger;
    this.Node=false;
    if(title.value !="" || description.value !=""){
      // this.notesmode.changeColor=null;
      // this.notesmode.archive=this.isarchive;
      // this.notesmode.remainder=null;
      // this.notesmode.pin=0;
      const form={
        title,
        description
      }
      console.log(title, description);
      this.noteService.addNote(form).subscribe(Response=>
      {
        console.log(Response);
        this.snackbar.open('Note Created Sucessfully','dismiss',{duration:3000});
      },
      (error) => {
        this.snackbar.open('Error in creating note', '', { duration: 2000 });
        console.log('error response', error);
      });
    }
  }
}