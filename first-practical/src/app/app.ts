import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login}from './login/login';
import{Signup} from './signup/signup'
import{FormsModule} from '@angular/forms';
import{Counter} from './counter/counter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,FormsModule,RouterOutlet,Counter,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('first-practical');
  name:string="rani patel";
  studentNames=["abc","def","edr"];
  studentDetails=[
    {name:"rani",age:19,city:"idar"},
    {name:"harpal",age:26,city:"ahm"}
  ]
show=true;
ChangeShow(){
  if(this.show==true){
    this.show=false;
  }
  else{
    this.show=true;
  }
}
  
}
