import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8),
  ]);
  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackbar: MatSnackBar) 
    { }
  ngOnInit() {
  }
  loginform(){
    if (this.email.value != null && this.password.value >= 8) {
      const form ={
        email: this.email.value,
        password: this.password.value
       };
    }
  }

}
