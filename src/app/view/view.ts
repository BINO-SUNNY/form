import { Component } from '@angular/core';
import { Data } from '../servies/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  imports: [CommonModule,FormsModule],
  templateUrl: './view.html',
  styleUrl: './view.css',
})
export class View {

    data: any[] = [];


  selectedUser: any;

  editUser: any = {};
editIndex!: number;

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

  const modal = new (window as any).bootstrap.Modal(
    document.getElementById('staticBackdrop')
  );

  modal.show()


}

editDetails(item: any, index: number) {
  this.editUser = { ...item };   // Copy object
  this.editIndex = index;
}

// updateUser() {
//   this.data[this.editIndex] = { ...this.editUser };

//   const modal = document.getElementById('editModal');
//   const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
//   modalInstance.hide();
// }

updateUser() {
  const u = this.editUser;

  if (!u.first) return this.showToast('First Name is required');
  if (!u.gender) return this.showToast('Gender is required');
  if (!u.dob) return this.showToast('DOB is required');
  if (!u.address) return this.showToast('Address is required');
  if (!u.pinCode) return this.showToast('Pincode is required');
  if (!u.phone) return this.showToast('Phone is required');
  if (!u.email) return this.showToast('Email is required');
  if (!u.stateName) return this.showToast('State is required');
  if (!u.countryName) return this.showToast('Country is required');

  
if (this.editUser.newPassword !== this.editUser.confirmPassword) {
   const modalEl = document.getElementById('alertMessageErrorPassword')

      const modal = new (window as any).bootstrap.Modal(modalEl);

      modal.show();
    return;
  }


  this.data[this.editIndex] = { ...this.editUser };

  const modal = document.getElementById('editModal');
  const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
  modalInstance.hide();

  this.showToast('User updated successfully');
}


// display toast

showToast(message: string) {
  const toastEl = document.getElementById('liveToast');

  if (toastEl) {
    toastEl.querySelector('.toast-body')!.textContent = message;

    const toast = new (window as any).bootstrap.Toast(toastEl);
    toast.show();
  }
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


}




