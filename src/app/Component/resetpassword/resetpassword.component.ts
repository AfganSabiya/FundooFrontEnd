import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackBar: MatSnackBar
  ) { }
      password = new FormControl('', [
      Validators.required, Validators.minLength(8),]);
      confirmpassword = new FormControl('', [
      Validators.required, Validators.minLength(8),]);
  ngOnInit() {
  }
  resetForm(){
    let newPassword= new String(this.password.value)
    if(this.confirmpassword.value!='' && this.password.value!='' && this.confirmpassword.value===this.password.value){
      const data = {
        newPassword: this.password.value,
        confirmPassword:this.confirmpassword.value,
      };
      console.log("PASSWORD CHANGED SUCCESSFULLY");
      this.service.resetForm(data).subscribe(
        (response) => 
        {
        this.snackBar.open('Reset password done sucessfully', 'Dismiss', { duration: 3000 });
        },
        (error) => {
          this.snackBar.open('Resetpassword Failed.Check Your Credentails', '', { duration: 4000 });
        });
    }
  }
      
}
