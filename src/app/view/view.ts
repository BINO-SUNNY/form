import { Component } from '@angular/core';
import { Data } from '../servies/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {

    data: any[] = [];


  selectedUser: any;


    constructor(private ds:Data){}

  
  ngOnInit(){

    this.data=this.ds.getData()
    console.log(this.data);
    

  }  

  deleteRow(index: number) {
  this.data.splice(index, 1);
}

Details(item: any) {
  this.selectedUser = item;
}

}
