import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  name="rani";
  
   namechange(){
    this.name='10';
    return this.name
}
}
