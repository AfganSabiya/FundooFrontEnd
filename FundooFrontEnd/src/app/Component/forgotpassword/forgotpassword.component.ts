import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { error } from 'protractor';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit 
{
  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackBar: MatSnackBar)
   { }
   email = new FormControl('',
  [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  ]);
  ngOnInit() {
  }
  forgotForm()
  {
   const credentials= {
      userEmail:this.email.value,
    };
    this.service.forgotForm(credentials).subscribe(
      (result)=>{
      this.snackBar.open('check email to reset your password','Dismiss',{duration:4000});
      },
      (error) => 
      {
        console.log(error);
        this.snackBar.open('forgot Failed.Check Your Credentails', '', { duration: 4000 });
      });
    }
  }