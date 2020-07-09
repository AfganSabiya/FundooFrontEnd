import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  header = {
    headers: new HttpHeaders()
       .set('Authorization',  `Bearer ${localStorage.token}`)
   };
  constructor(
    private http : HttpClient
  ) { }

  get(path){
    return this.http.get(environment.Url+path,this.header);
  }
  post(path,data){
    debugger
    return this.http.post(environment.Url+path,data,this.header);
  }
  delete(path){
    return this.http.delete(environment.Url+path,this.header);
  }
  put(path,result){
    debugger;
    return this.http.put(environment.Url+path,result,this.header);
  }
}
