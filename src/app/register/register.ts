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
   pincode:'',
   phone:'',
   email:'',
   state:'',
   country:'',
   id:'',
   np:'',
   cp:''
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

  
  

  if(this.userdata.id!="admin"){
    alert("id is wrong..")

  }
  
  
  else if(this.userdata.np!=this.userdata.cp){
    alert("password is not maching")
  }
  else{
    this.ds.setData(this.userdata);
    console.log(this.userdata);
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
    pincode: '',
    phone: '',
    email: '',
    state: '',
    country: '',
    id: '',
    np: '',
    cp: ''
  };

}



}
