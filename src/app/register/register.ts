import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Data } from '../servies/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

 userdata={
   first:'',
   last:'',
   gender:'',
   dob:'',
   address:'',
   pincode:0,
   phone:'',
   email:'',
   stateId:'',
   countryId:'',
   id:'',
   np:'',
   cp:'',
   ck:''
 }


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







register(){

  

  
   if(this.userdata.np!=this.userdata.cp){
    alert("password is not maching")
  }
  else{

  this.userdata.pincode = +(this.userdata.pincode);

    this.ds.setData(this.userdata);

    console.log(this.userdata);
    console.log(this.userdata.ck);

    console.log(this.userdata.stateId);

    console.log(this.userdata.countryId);
    

    console.log(this.userdata.pincode);
    

    
    
    alert("register successful")
  }

}

clear(){
  
  this.userdata = {
    first: '',
    last: '',
    gender: '',
    dob: '',
    address: '',
    pincode:0,
    phone: '',
    email: '',
    stateId: '',
    countryId: '',
    id: '',
    np: '',
    cp: '',
    ck:''
  };

}



}
