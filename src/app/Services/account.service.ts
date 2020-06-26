import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/usermodel.model';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  static UpdateProfilePic: any;
  constructor(private http: HttpClient) { }

  registrationForm(values){
    console.log(values);
    return this.http.post(environment.Url+'api/Register',values);
  }
  loginForm(data)
  {
    return this.http.post(environment.Url+'api/AdminLogin',data);
  }
  forgotForm(values)
  {
    return this.http.put(environment.Url+'api/ForgotPassword',values);
  }
  resetForm(values)
  {
    debugger;
    return this.http.put(environment.Url+'api/ResetPassword',values);
  }
}
