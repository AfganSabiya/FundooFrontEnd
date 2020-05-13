import { Component, OnInit } from '@angular/core';
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
  email = new FormControl('', [
    Validators.required, Validators.email,]);
   
  ngOnInit() {
  }
  const form = {
    newPassword :this.password.value,
    userEmail: this.email.value,
    confirmPassword: this.password.value
  };
}
