import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {


  items: any[] = [];





setData(item: any) {
  this.items.push(item);
   console.log(this.items);
}



getData() {
  return this.items;


}




  
}
