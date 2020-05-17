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
  title;
  description;
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
  // closenote(){
  //   this.Node=true;
  //   this.Node=false;
  // }
  addNote(){
    debugger;
    this.Node=false;
    if(this.createNoteForm.value.title !="" || this.createNoteForm.value.description !=""){
      this.notesmode.title = this.createNoteForm.value.title;
      this.notesmode.description =this.createNoteForm.value.description;
      this.notesmode.changeColor=null;
      this.notesmode.archive=this.isarchive;
      this.notesmode.remainder=null;
      this.notesmode.pin=0;
      console.log(this.notesmode);
      this.noteService.addNote(this.notesmode).subscribe(Response=>
      {
        console.log(Response);
        this.snackbar.open('Note Created Sucessfully','dismiss',{duration:3000});
      },
      (error) => {
        this.snackbar.open('Error in creating', '', { duration: 2000 });
        console.log('error response', error);
      });
    }else{

    }
  }
}