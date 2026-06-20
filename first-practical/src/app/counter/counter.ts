import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

count:number=0;
increment(){
    this.count++;
}




}
