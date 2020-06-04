import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  [x: string]: any; 
  @Input() notes:any;
  note:Note = new Note();
  @Input() onDisplay:boolean = false;
 @Input() onCreateNote:boolean = false;
  @Output() output:EventEmitter<any> = new EventEmitter<any>();
  @Input() trash:boolean=false;
  
 constructor()
     { }
  ngOnInit()
  { }
  isArchive(){
    this.output.emit({ name: 'archive' });
  }
  setColor(color)
  {
    this.output.emit({ name: 'color', value:color});
  }
  DeleteNotegotoTrash(){
    this.output.emit({ name: 'trash'});
  }
   restore() {
    this.output.emit({ name: 'Restore'});
   }
   deleteForever() {
    this.output.emit({ name: 'deleteforever'});
   }

  colors = [
    [
      { color: "rgb(255,255,255)", name: "Default" },
      { color: "rgb(242, 139, 130)", name: "Red" },
      { color: "rgb(251, 188, 4)", name: "Orange" },
      { color: "rgb(255, 244, 117)", name: "Yellow" }
    ],
    [
      { color: "rgb(204, 255, 144)", name: "Green" },
      { color: "rgb(167, 255, 235)", name: "Teal" },
      { color: "rgb(203, 240, 248)", name: "Blue" },
      { color: "rgb(174, 203, 250)", name: "Dark blue"}
    ],
    [
      { color: "rgb(215, 174, 251)", name: "Purple" },
      { color: "rgb(253, 207, 232)", name: "Pink" },
      { color: "rgb(230, 201, 168)", name: "Brown" },
      { color: "rgb(232, 234, 237)", name: "Gray" }
    ]
  ]
}