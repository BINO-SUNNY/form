import { Component } from '@angular/core';
import {  FormsModule,ReactiveFormsModule,Validators,FormBuilder} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Data } from '../servies/data';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {


  registerForm!:FormGroup

  constructor(private ds:Data,private router:Router, private fb:FormBuilder){}


//  userdata={
//    first:'',
//    last:'',
//    gender:'',
//    dob:'',
//    address:'',
//    pinCode:'',    
//    phone:'',
//    email:'',
//    stateId:'',
//    countryId:'',
//    newPassword:'',
//    confirmPassword:'',
//    checkBox:''
//  }





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

  


ngOnInit(): void{

  this.createForm()
}

createForm(){
  this.registerForm = this.fb.group({

     first: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z ]+$/)]],
      last: ['', [Validators.pattern(/^[A-Za-z ]+$/)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
        pinCode: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{6}$/),
        Validators.maxLength(6)
      ]
    ],

    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\+?[0-9]{7,15}$/),
        Validators.maxLength(15)
      ]
    ],
      email: ['', [Validators.email]],
      stateId: ['', Validators.required],
      countryId: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/)]],
      confirmPassword: ['', Validators.required],
      checkBox: [false]
    });
}

 register() {
  if (this.registerForm.valid) {
    if (this.registerForm.value.newPassword === this.registerForm.value.confirmPassword) {
      console.log(this.registerForm.value);
      alert("Form submitted successfully");
      this.ds.setData(this.registerForm.value);
      this.clearReactiveForm();
    } else {
      alert("Passwords do not match");
      return;
    }
  } else {
    this.registerForm.markAllAsTouched();
    alert("Please fill all required fields");
    return;
  }
}





// this.userdata.pinCode = Number(this.userdata.pinCode)


// register(form: any) {

//   if (form.invalid) {
//     const modalEl = document.getElementById('alertMessageError')

//       const modal = new (window as any).bootstrap.Modal(modalEl);

//       modal.show();
//     return;
//   }

//   if (this.userdata.newPassword !== this.userdata.confirmPassword) {
//    const modalEl = document.getElementById('alertMessageErrorPassword')

//       const modal = new (window as any).bootstrap.Modal(modalEl);

//       modal.show();
//     return;
//   }

//   this.ds.setData(this.userdata);

//   const modalEl = document.getElementById('alertMessage');
//       const modal = new (window as any).bootstrap.Modal(modalEl);

//       modal.show();
//   this.clear()
// }




// clear(){
  
//   this.userdata = {
//     first: '',
//     last: '',
//     gender: '',
//     dob: '',
//     address: '',
//     pinCode:'',
//     phone: '',
//     email: '',
//     stateId: '',
//     countryId: '',
//     newPassword: '',
//     confirmPassword: '',
//     checkBox:''
//   };

// }

clearReactiveForm() {
  this.registerForm.reset();
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
