import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Collaborator } from 'src/app/model/collaboratormode.model';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  email = localStorage.getItem('Email');
  name = localStorage.getItem('FullName');
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialogRef: MatDialogRef<CollaboratorComponent>) { }
    passCollaboratorData: Collaborator = new Collaborator();
  ngOnInit() {
  }
  save(email,id)
  {
    debugger;
    console.log(email,id);
    this.passCollaboratorData.noteId = id;
    if(email != null && id != null){
    this.passCollaboratorData.Emailsender = localStorage.getItem('Email');
    this.passCollaboratorData.Emailreceiver = email;
    this.dialogRef.close({ collabData : this.passCollaboratorData });
    }else if(email !=null && id == null){
    this.dialogRef.close({ email : email});
    }else{
      console.log("error");
    }
  }

  deleteCollaborator(id){
debugger;
this.passCollaboratorData.id = id
this.dialogRef.close({ deleteCol : id})
  }
}
