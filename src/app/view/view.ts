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

  states = [
    { id: 1, name: 'Kerala' },
    { id: 2, name: 'Tamil Nadu' },
    { id: 3, name: 'Karnataka' },
    { id: 4, name: 'Andhra Pradesh' },
    { id: 5, name: 'Telangana' }
  ];

  countrys=[
    {id:1,name:"india"},
    {id:2,name:"United States"},
    {id:3,name:"china"},
    {id:3,name:"UAE"}
  ]


    constructor(private ds:Data){}

  
  ngOnInit(){

    this.data=this.ds.getData()

    this.data.forEach((item:any)=>{
      console.log(item.ck);

      if(item.ck){
        item.color='green'
      }
      else{
        item.color='red'
      }
      
    })
    
    console.log(this.data);
    

  }  

  

  deleteRow(index: number) {
  this.data.splice(index, 1);
}

Details(item: any) {
  
  this.selectedUser = item;


}




getStateName(id: any): string {
  return this.states.find(s => s.id == id)?.name  || '';
}

getCountryName(id:any):string{
  return this.countrys.find(c=>c.id==id)?.name || ''
}







}




