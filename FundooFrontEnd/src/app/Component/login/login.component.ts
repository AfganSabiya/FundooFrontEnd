import { Component, OnInit } from '@angular/core';


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

  constructor(
    private service: AccountService, 
    private route: Router, 
    private snackbar: MatSnackBar) 
    { }


  ngOnInit() {
  }

}
