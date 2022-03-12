import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  ciudadesBorradas:string[]=[];
  ciudades:string[]=["Avilés","Santander","Cuenca","Madrid","Alicante"];

  borrarCiudades():void{
  this.ciudades.forEach(val => this.ciudadesBorradas.push(val));
  this.ciudades.length=0;

  }

  ngOnInit(): void {
  }

}

