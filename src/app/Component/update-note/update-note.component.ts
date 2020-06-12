import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialogRef: MatDialogRef<UpdateNoteComponent>
  ) { }
  passData: Note = new Note();
  ngOnInit() {
  }
  updateNote(id,title,description,ChangeColor) {
    this.passData.id = id;
    this.passData.description = description;
    this.passData.title = title;
    this.passData.changeColor =ChangeColor;
    this.dialogRef.close({ update: this.passData });
  }
  outputFunction(value) {
    this.dialogRef.close({ resu: value });
  }
}
