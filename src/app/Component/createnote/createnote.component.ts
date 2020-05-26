import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
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
  notesmode: Note = new Note();
  isarchive=0;
  color:string;
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
    })
  }
  addNote(title,description){
    this.Node=false;
    if(title.value !="" || description.value !=""){
      this.notesmode.archive=this.isarchive;
      this.notesmode.changeColor= this.color;
      const form={
        title,
        description
      }
      console.log(title, description);
      this.noteService.addNote(form).subscribe(Response=>
      {
        console.log(Response);
        this.outputnote.emit({ name : 'getNote'});
        this.snackbar.open('Note Created Sucessfully','dismiss',{duration:3000});
        this.submit();
      },
      (error) => {
        this.snackbar.open('Error in creating note', '', { duration: 2000 });
        console.log('error response', error);
      });
    }
    else{
      this.submit();
    }
  }
  // setColor(colorName) {
  //   this.color=colorName;
  // }
}