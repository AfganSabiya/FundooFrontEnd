import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { DataService } from 'src/app/Services/data.service';
import { CollaboratorService } from 'src/app/Services/collaborator.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() labels:any;
   displayAllNotes: any;
   searchDisplayNote:string;
   allLabelList:any;
   allCollaboratorList:any;
   @Output() outputnote: EventEmitter<any> = new EventEmitter();

  constructor
  (
    private noteservice: NoteService,
    private dataservice: DataService,
    private collaboservice:CollaboratorService
  ) { }
  ngOnInit()
  { 
    this.dataservice.sharingsearchMessage.subscribe(option => this.searchDisplayNote = option);
    this.getAllNotes();
    this.getAllLabelList();
    this.getAllCollaboratorList("p");
  }

  getoutput(){
    this.getAllLabelList();
    this.getAllNotes();
  }
  getAllNotes(e?) 
  {
    this.noteservice.getNote().subscribe(Response => 
    {
      this.displayAllNotes = Response;
       console.log(this.displayAllNotes);
    });
  }
  getAllLabelList(e?)
  {
    this.noteservice.GetLabelList().subscribe(
      Response => {
        this.allLabelList=Response;
        console.log(Response);
      }
    );
  }
  getAllCollaboratorList(e?){
    this.collaboservice.getAlCollaborators().subscribe(
      Response => {
        this.allCollaboratorList = Response;
        console.log(this.allCollaboratorList)
      }
    )
  }

}