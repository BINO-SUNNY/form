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

itemsWithNames: any[] = [];


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
      console.log(item.checkBox);

      if(item.checkBox){
        item.color='green'
        item.termsText='Terms and conditions agreed'
      }
      else{
        item.color='red'
        item.termsText = 'Terms and conditions not agreed';
      }
      
    })


    this.data.forEach(item => {
  item.stateName = this.states.find(s => s.id == item.stateId)?.name || '';
  item.countryName = this.countrys.find(c => c.id == item.countryId)?.name || '';
});
    
    console.log(this.data);
    

  }  

  

  deleteRow(index: number) {
  this.data.splice(index, 1);
}

Details(item: any) {
  
  this.selectedUser = item;


}




prepareItems() {
  this.data.forEach(item => {
    item.stateName = this.states.find(s => s.id == item.stateId)?.name || '';
    item.countryName = this.countrys.find(c => c.id == item.countryId)?.name || '';
  });
}







}




