import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),
  ]);
  lastName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),
  ]);
  email = new FormControl('', [
    Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8),
  ]);
  constructor(private service: AccountService, private route: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  registrationform() {
    debugger;
     let firstname = new String(this.firstName.value);
     let lastname = new String(this.lastName.value);
    let pwd = new String(this.password.value);
    if (firstname.length >= 4 && lastname.length >= 4 && pwd.length >= 8) 
    {
       const form = 
       {
         firstName: this.firstName.value,
         lastName: this.lastName.value,
         email: this.email.value,
         password: this.password.value
       };
       this.service.registrationform(form).subscribe((result) => 
       {
         this.snackbar.open('Registered Sucessfully', 'Dismiss', { duration: 3000 });
         console.log('result :', result);
         this.route.navigate(['/login']);
       },
         (error) =>
          {
           this.snackbar.open('Registration Failed.Check Your Credentails', '', { duration: 4000 });
          });
    }
 }
}
