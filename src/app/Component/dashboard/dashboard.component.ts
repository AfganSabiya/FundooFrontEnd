import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { Note } from 'src/app/model/notesmode.model';
import { NoteService } from 'src/app/Services/note.service';
import { MatDialog } from '@angular/material';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { AccountService } from 'src/app/Services/account.service';
import { UserModel } from 'src/app/model/usermodel.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({ length: 10 }, () =>
    ``);
  private _mobileQueryListener: () => void;
  viewToggle: boolean = true;
  labels: any;
  searchNotes: any;
 userValues: any;
 labelName:any;
  constructor(
    private route: Router,
    private dataService: DataService,
    private accountservice: AccountService,
    private noteservice: NoteService,
    public dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  view: boolean = false;
  token = localStorage.getItem('token');
  profileData: Note = new Note();
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() { 
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  note() {
    this.route.navigate(['dashboard/note']);
  }
  toggleViews() {
     this.viewToggle = !this.viewToggle;
    if (!this.viewToggle) {
      this.dataService.changegridMessage('40%')
      this.dataService.updateMargin('28%')
    }
    else{
      this.dataService.changegridMessage('22%')
      this.dataService.updateMargin('2%')
    }
  }
  findData(value){
   this.dataService.UpdateSearchMessage(value)
   this.noteservice.Search(value).subscribe(searchNotes=>{
     this.searchNotes = searchNotes;
     this.dataService.searchnotemessage(this.searchNotes);
     console.log(this.searchNotes);
   })
  }
  onUpload(event){
    const dialogref=this.dialog.open(ProfilePicComponent,{
      data:this.labels,
      width: '600px',
      height:'200px'
    });
  }
}
