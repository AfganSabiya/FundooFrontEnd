import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  registrationForm(values){
    return this.http.post(environment.Url+'api/Register',values);
  }
  loginForm(data){
    return this.http.post(environment.Url+'api/AdminLogin',data);
  }
  
}
