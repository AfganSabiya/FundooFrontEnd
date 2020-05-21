import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { Note } from 'src/app/model/notesmode.model';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() inputdata: any;
  @Input() note:any;
  @Input() notesmode:Note=new Note();
  constructor() { }
  ngOnInit() 
  { }

}
