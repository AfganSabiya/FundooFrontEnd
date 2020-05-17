import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService 
{
  header = {
    headers: new HttpHeaders()
       .set('Authorization',  `Bearer ${localStorage.token}`)
   };
  constructor( private http: HttpClient){ }
    addNote(params)
    {
      return this.http.post(environment.Url+'api/AddNotes',params,this.header);
    }
    getnote(){
      return this.http.get(environment.Url+'api/GetAllNotes',this.header);
    }
}
