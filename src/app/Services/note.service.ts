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
    archive(data){
      console.log(data);
      return this.http.put(environment.Url+'api/IsArchive?id='+data,null,this.header);
    }
    unarchive(result){
      debugger;
      console.log(result);
      return this.http.put(environment.Url+'api/unArchive?id='+result,null,this.header);
    }
    setColor( id, color)
    {
      return this.http.put(environment.Url+'api/ChangeColor?id='+id+'&color='+color,null,this.header);
    }
    getTrashlist(){
      debugger;
      return this.http.get(environment.Url+'api/TrashList',this.header);
    }
    getArchiveList(){
      debugger;
      return this.http.get(environment.Url+'api/ArchiveList',this.header);
    }
    setRemainder(id,reminder){
     
      return this.http.post(environment.Url+'api/Reminder?id='+id+'&reminder='+reminder,null,this.header);
    }
    removeReminder(id)
    {
      debugger;
      return this.http.put(environment.Url+'api/DeleteReminder?id='+id,null,this.header);
    }
    sendToTrash(param)
    {
      debugger;
      return this.http.put(environment.Url+'api/Trash?id='+param,null,this.header);
    }
    restoreFromTrash(param)
    {
     
      return this.http.put(environment.Url+'api/restoreId?id='+param,null,this.header);
    }
    deleteNote(id)
    {
      
      return this.http.put(environment.Url+'api/DeleteNote?id='+id,null,this.header);
    }
    updateNote(obj){
     
      return this.http.put(environment.Url+'api/updateNote',obj,this.header);
    }
    getRemainderlist(){
      
      return this.http.get(environment.Url+'getReminder',this.header);
    }
  
    UpdateProfilePic(arr){
      debugger;
      return this.http.post(environment.Url+'api/profilephoto?afgansabiya786@gmail.com',arr);
    }
 
    Search(values){
      debugger;
      return this.http.get(environment.Url+'api/search?searchParameter='+values,this.header);
    }
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
