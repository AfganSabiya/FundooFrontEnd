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
    getNote(){
      return this.http.get(environment.Url+'api/GetAllNotes',this.header);
    }
    archive(arr){
      debugger;
      console.log(arr);
      return this.http.post(environment.Url+'api/IsArchive?id='+arr,null,this.header);
    }
    unarchive(id){
      return this.http.get(environment.Url+'api/unArchive?'+id,this.header);
    }
}
