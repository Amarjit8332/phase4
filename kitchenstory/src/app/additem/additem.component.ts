import { Component, OnInit } from '@angular/core';
import { AdditemserviceService } from '../additemservice.service';
import { Item } from '../item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor (private service: AdditemserviceService) {}
    
  item:Item=new Item();
  message:any;
  public additemNow(){
    let response=this.service.doregistration(this.item);
    response.subscribe((data:any) =>this.message=data);
  }

}
