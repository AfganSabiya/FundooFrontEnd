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
  @Input() reminder: any;
  @Output() output: EventEmitter<any> = new EventEmitter();
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
  closenote(){
    this.Node=true;
    this.Node=false;
  }
  CreateNote(){
    this.Node=false;
    if(this.createNoteForm.value.title !="" || this.createNoteForm.value.description !=""){
      this.notesmode.title = this.createNoteForm.value.title;
      this.notesmode.description =this.createNoteForm.value.description;
      this.notesmode.changeColor=this.color;
      this.notesmode.archive=this.isarchive;
      this.notesmode.remainder=this.reminder;
      this.notesmode.pin=0;
      this.notesmode.addImage=this.image;
      this.noteService.addNote(this.notesmode).subscribe(
        data=>{
        console.log(data);
        this.snackbar.open('Note Created Sucessfully','dismiss',{duration:3000});
        this.submit();
        this.output.emit("ok")
      },
      (error) => {
        this.snackbar.open('Error in creating', '', { duration: 2000 });
        console.log('error response', error);
      });
    }else{
        this.submit();
    }
  }
  submit(){
    this.createNoteForm.value.title="";
    this.createNoteForm.value.description="";
  }
}