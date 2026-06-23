import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Data } from '../servies/data';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,RouterLink],
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
