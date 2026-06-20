import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup { 
  
  
  rschange(a:number,b:number){

    return a+b;
  }
}
