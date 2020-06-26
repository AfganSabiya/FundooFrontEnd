import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  header = {
    headers: new HttpHeaders()
       .set('Authorization',  `Bearer ${localStorage.token}`)
   };
  
  constructor( private http: HttpClient){ }
  AddingLabel(values){
    debugger;
    return this.http.post(environment.Url+'api/AddLabel',values,this.header);
  }
  DeleteLabel(id){
    debugger;
    return this.http.delete(environment.Url+'DeleteLabel?id='+id,this.header);
  }
  GetLabelList(){
    return this.http.get(environment.Url+'api/GetAllLabels',this.header);
  }
}
