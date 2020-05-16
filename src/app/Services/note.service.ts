import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor
  (
    private http: HttpClient){ }
    addNote(values){
      return this.http.post(environment.Url+'api/AddNotes',values);
    }
}
