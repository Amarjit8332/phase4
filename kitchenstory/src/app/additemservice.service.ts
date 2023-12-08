import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditemserviceService {

  constructor(private http:HttpClient) { }


  public doregistration(Item:any){
    return this.http.post("http://localhost:8080/register",Item,{responseType:'text' as 'json'})
  }

  public getItem(){
    return this.http.get("http://localhost:8080/getAllitem");
  }

  public deleteItem(id:any){
    return this.http.delete("http://localhost:8080/cancel/"+id);
  }

  public getByname(name:any){
    return this.http.get("http://localhost:8080/findbyname/"+name);
  }

}
