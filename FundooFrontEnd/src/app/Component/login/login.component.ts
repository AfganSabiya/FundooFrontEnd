import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  debugger;
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8),
  ]);
  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackBar: MatSnackBar) 
    { }
  ngOnInit() {
  }
  loginForm(){
    debugger;
    let userPassword = new String(this.password.value);
    if (this.email.value != null && userPassword.length >= 8) {
      const credentials= {
        userEmail: this.email.value,
        userPassword: this.password.value
      };
      this.service.loginForm(credentials).subscribe((response) => 
      {
        this.snackBar.open('Login Successfully', 'Dismiss', { duration: 3000 });
        console.log('result :', response );
        this.route.navigate(['forgot/display']);
      },      (error) => {
        console.log('error :', error );
        this.snackBar.open('Login Failed. Check Your Credentials', '', { duration: 4000 });
      });
    }
  }
}