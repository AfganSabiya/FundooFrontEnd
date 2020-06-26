import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackBar: MatSnackBar) 
    { }
  ngOnInit(): void {
  }
 
  userEmail=[];
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8),
  ]);

  loginForm()
  {
    // let UserPassword = new String(this.password.value);
    // if (this.email.value != null && UserPassword.length >= 8) {
      const credentials= {
        UserEmail: this.email.value,
        UserPassword: this.password.value
      };
      this.service.loginForm(credentials).subscribe((response) => 
      {
        console.log(response);
        localStorage.setItem('Email',credentials.UserEmail);
        localStorage.setItem('token',response['token']);
        this.snackBar.open('Login Successfully', 'Dismiss', { duration: 3000 });
        this.route.navigate(['/dashboard']);
      },(error) => {
        console.log('error :', error );
        this.snackBar.open('Login Failed. Check Your Credentials', '', { duration: 4000 });
      });
    }
  //}

}
