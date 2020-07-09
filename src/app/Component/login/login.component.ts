import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

user = '1'
  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackBar: MatSnackBar) 
    { }
  ngOnInit(): void {
    localStorage.setItem('SessionUser',this.user);
  }
 
  userEmail=[];
  email = new FormControl('', [
    Validators.required, Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8),
  ]);

  loginForm()
  {
       if (this.email.value != null && this.password.value !=null) {
       const credentials= {
        UserEmail: this.email.value,
        UserPassword: this.password.value
      };
      this.service.loginForm(credentials).subscribe((response) => 
      {
        console.log(response);
        if(Response !=null){
        localStorage.setItem('Email',credentials.UserEmail);
        localStorage.setItem('token',response['token']);
        this.snackBar.open('Login Successfully','Dismiss', { duration: 3000 });
        this.route.navigate(['/dashboard']);}
      },(error) => {
     console.log('error :', error );
        this.snackBar.open('Login Failed. Check Your Credentials', '', { duration: 4000 });
      });
    }
 }

}
