import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  uname=""
  pass=""

  constructor(private router:Router){}







  login(){
  
    if(this.uname=="admin"){
      if(this.pass=="admin"){

        alert("login successful..")
        this.router.navigateByUrl('Register')


      }
      else{
        alert("password is not maching..")

      }

    }
    else{
      alert("user not exist...")
    }

    
  }

}
