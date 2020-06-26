import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Service/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: AccountService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }
  ngOnInit() {
  }

    firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
    lastName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'),]);
    email = new FormControl('', [
    Validators.required, Validators.email,]);
    password = new FormControl('', [
    Validators.required, Validators.minLength(8),]);
    confirmpassword = new FormControl('', [
    Validators.required, Validators.minLength(8),]);
   
  registrationForm() 
  {
    let firstName = new String(this.firstName.value);
    let lastName = new String(this.lastName.value);
    let UserPassword = new String(this.password.value);
    try{
    if (firstName.length >= 4 && lastName.length >= 4 && UserPassword.length >= 8) 
    {
      const form = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        UserEmail: this.email.value,
        UserPassword: this.password.value
      };
      this.service.registrationForm(form).subscribe(result => {
        this.snackbar.open('Registered Sucessfully', 'Dismiss', { duration: 3000 });
        this.route.navigate(['/login']);
      },
        (error) => {
          console.log(error);
          this.snackbar.open('Registration Failed.Check Your Credentails', '', { duration: 4000 });
        });
      }
    }catch(arr){
      this.snackbar.open('arr','',{duration:4000});
    }
  }
    
}
