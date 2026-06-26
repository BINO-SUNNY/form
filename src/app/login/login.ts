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







login() {
  if (this.uname == "admin") {
    if (this.pass == "admin") {

      const modalEl = document.getElementById('alertMessage');
      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();

    } else {
      const modalEl = document.getElementById('alertMessageErrorPassword')

      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
    }

  } else {
    const modalEl = document.getElementById('alertMessageErrorUser')

      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
  }
}


goToRegister() {
  const modalEl = document.getElementById('alertMessage');
  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('/Register');
}

gooTooRegister() {
  const modalEl = document.getElementById('alertMessageErrorPassword')

  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('');
}

gooTTooRegister() {
  const modalEl = document.getElementById('alertMessageErrorUser')

  const modal = (window as any).bootstrap.Modal.getInstance(modalEl);

  modal.hide();
  this.router.navigateByUrl('');
}

}
