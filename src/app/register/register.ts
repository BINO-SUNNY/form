import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
   pinCode:'',    
   phone:'',
   email:'',
   stateId:'',
   countryId:'',
   newPassword:'',
   confirmPassword:'',
   checkBox:''
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

  
constructor(private ds:Data,private router:Router){}




// this.userdata.pinCode = Number(this.userdata.pinCode)


register(form: any) {

  if (form.invalid) {
    const modalEl = document.getElementById('alertMessageError')

      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
    return;
  }

  if (this.userdata.newPassword !== this.userdata.confirmPassword) {
   const modalEl = document.getElementById('alertMessageErrorPassword')

      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
    return;
  }

  this.ds.setData(this.userdata);

  const modalEl = document.getElementById('alertMessage');
      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
  this.clear()
}


clear(){
  
  this.userdata = {
    first: '',
    last: '',
    gender: '',
    dob: '',
    address: '',
    pinCode:'',
    phone: '',
    email: '',
    stateId: '',
    countryId: '',
    newPassword: '',
    confirmPassword: '',
    checkBox:''
  };

}
onlyAlphabets(event: KeyboardEvent) {
  const key = event.key;

  if (!/^[a-zA-Z ]$/.test(key)) {
    event.preventDefault();
  }
}

onlyAlphabetsAndNumber(event: KeyboardEvent) {
  const key = event.key;

if (!/^[a-zA-Z0-9 ,./#-]$/.test(key)) {
    event.preventDefault();
  }
}

onlyNumber(event:KeyboardEvent){
  const key =event.key

  if(!/^[0-9]$/.test(key)){
    event.preventDefault()
  }
}


forEmail(event:KeyboardEvent){
  const key =event.key

  if(!/^[a-zA-Z0-9@._+-]$/.test(key)){
    event.preventDefault()
  }
}


forPassword(event:KeyboardEvent){
  const key =event.key

  if(!/^[a-zA-Z0-9@#$%&_+\-!*]$/.test(key)){
    event.preventDefault()
  }
}

goToRegister() {
  const modalEl = document.getElementById('alertMessage');
  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('/Register');
}



gooToRegister() {
  const modalEl = document.getElementById('alertMessageError')

  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('/Register');
}


gooTooRegister() {
  const modalEl = document.getElementById('alertMessageErrorPassword')

  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('/Register');
}




}
