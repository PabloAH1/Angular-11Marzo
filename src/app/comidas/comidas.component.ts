import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  listaComidas:string[]=["Fabada"];
  comidaBorrada:string| undefined;
  comidaInput:string="";

  borrarComida():void{
  this.comidaBorrada="Se han eliminado todas las comidas";
  this.listaComidas.length=0;

  }

  addComida(): void{
    if(this.comidaInput!=""){
      this.listaComidas.push(this.comidaInput);
      this.comidaInput="";
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
