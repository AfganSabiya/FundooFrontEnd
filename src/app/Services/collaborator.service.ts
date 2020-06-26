import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  header = {
    headers: new HttpHeaders()
       .set('Authorization',  `Bearer ${localStorage.token}`)
   };
  
  constructor( private http: HttpClient){ }
  getAlCollaborators(){
   
    return this.http.get(environment.Url+'api/GetCollaborator',this.header);
  }

  AddCollaborators(col){
    return this.http.post(environment.Url+'api/AddCollaborator',col,this.header);
  }

  deleteCollaborator(del){
    return this.http.delete(environment.Url+'api/DeleteCollaborator?id='+del,this.header);
  }
  
}
