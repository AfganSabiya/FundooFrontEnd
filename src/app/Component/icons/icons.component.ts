import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  [x: string]: any; 
  @Input() notes:any;
  @Input() onDisplay:boolean = false;
  @Input() collaboricon:any;
  @Output() output:EventEmitter<any> = new EventEmitter<any>();
  @Input() trash:boolean=false;
  @Input() archive:boolean=false;
  todayString : string = new Date().toDateString();
 constructor(
  public dialog: MatDialog
  ) { }
  ngOnInit(){ }

  isArchive(){
    this.output.emit({ name: 'archive',value:""});
  }
    setColor(color){
    this.output.emit({ name: 'color', value:color});
  }
  DeleteNotegotoTrash(){
    this.output.emit({ name: 'trash',value:""});
  }
   restore(){
    this.output.emit({ name: 'Restore'});
   }
   deleteForever() {
    this.output.emit({ name: 'deleteforever'});
   }
   saveReminder(date) {
    this.output.emit({ name:"remainder" ,value:date});
  }
  collaborator(){
    debugger;
    this.output.emit({name:'collaborator', value:""});
  }
  addnewLabel(labelname){
    debugger;
    this.output.emit({ name :'label',value:labelname});
  }
   colors =[
    [
      { color: "rgba(255,255,255)", name: "Default" },
      { color: "rgba(242, 139, 130)", name: "Red" },
      { color: "rgba(251, 188, 4)", name: "Orange" },
      { color: "rgba(255, 244, 117)", name: "Yellow" }
    ],
    [
      { color: "rgba(204, 255, 144)", name: "Green" },
      { color: "rgba(167, 255, 235)", name: "Teal" },
      { color: "rgba(203, 240, 248)", name: "Blue" },
      { color: "rgba(174, 203, 250)", name: "Dark blue"}
    ],
    [
      { color: "rgba(215, 174, 251)", name: "Purple" },
      { color: "rgba(253, 207, 232)", name: "Pink" },
      { color: "rgba(230, 201, 168)", name: "Brown" },
      { color: "rgba(232, 234, 237)", name: "Gray" }
    ]
  ]
  setTime(time) {
    this.time = time;
  }
  setRepitation(repeat) {
    this.repeat = repeat;
  }
}