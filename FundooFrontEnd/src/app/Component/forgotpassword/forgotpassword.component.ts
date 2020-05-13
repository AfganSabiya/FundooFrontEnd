import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

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
   email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  ]);
  ngOnInit() {
  }
  forgotForm()
  {
    const credentials= {
      userEmail: this.email.value,
    };
    console.log(credentials);
    this.service.forgotForm(credentials).subscribe((response) => 
    {
        this.snackBar.open('Forgot Successfully', 'Dismiss', { duration: 3000 });
        console.log('result :', response );
        this.route.navigate(['reset']);
    },  (error) => {
      console.log('error :', error );
      this.snackBar.open('ForgotPassword Failed. Check Your Credentials', '', { duration: 4000 });
    });
  }
}
