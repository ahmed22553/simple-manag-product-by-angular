import { Component, OnInit } from '@angular/core';
import { Product } from './productsinterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  
  title:string ="hellooo";
 os:string="medoooooo";
 getName(){
  return this.os
 }

Product:Product[]= [
 { name :"hp", category:"computer",serial:22,dis:"good"},
 { name :"samsung", category:"phone",serial:222,dis:"good"},
 { name :"aplle", category:"computer and phone",serial:282,dis:"good"}
]
Product1:Product[]=[];
Pname:string="";
Pcategory:string = "";
Pdis:string = "";
Pserial:number = 0 ;
Add(){
  this.Product1.push({name:this.Pname,category:this.Pcategory,serial:this.Pserial,dis:this.Pdis});

};
remove(k:number){
  this.Product1.splice(k,1);

};
refresh(){
  this.Product1 = [
    { name :"hp", category:"computer",serial:22,dis:"good"},
    { name :"samsung", category:"phone",serial:222,dis:"good"},
    { name :"aplle", category:"computer and phone",serial:282,dis:"good"}
   ]
};


  ngOnInit(): void {
    this.refresh()
  }

}

