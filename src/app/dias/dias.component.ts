import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {
  listaDias:string[]=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16",
                       "17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
diaBorrado:string| undefined;


borrarDia(numero:number):void{
this.diaBorrado="El día "+this.listaDias[numero]+" ha sido eliminado";
this.listaDias.splice(numero,1);

}
  constructor() { }

  ngOnInit(): void {
  }

}
