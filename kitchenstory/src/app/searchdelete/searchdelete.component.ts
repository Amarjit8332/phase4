import { Component, OnInit } from '@angular/core';
import { AdditemserviceService } from '../additemservice.service';

@Component({
  selector: 'app-searchdelete',
  templateUrl: './searchdelete.component.html',
  styleUrl: './searchdelete.component.css'
})
export class SearchdeleteComponent implements OnInit {
 
  constructor (private service: AdditemserviceService) {}
  items: any;
  name:any;
  ngOnInit(): void {
    let response = this.service.getItem();
    response.subscribe((data: any) => this.items=data)
  }

  

 public getByname(){
    let response=this.service.getByname(this.name)
    response.subscribe((data:any) =>this.items=data);
  }

  public deleteItem(id: any){
    let response=this.service.deleteItem(id)
    response.subscribe((data:any) =>this.items=data);
  }

}
