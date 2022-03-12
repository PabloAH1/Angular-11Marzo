import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  listaMeses:string[]=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
                                     "Septiembre","Octubre","Noviembre","Diciembre"];
  mesBorrado:string| undefined;


  borrarMes(numero:number):void{
    this.mesBorrado=this.listaMeses[numero]+" ha sido eliminado";
    this.listaMeses.splice(numero,1);

  }






  ngOnInit(): void {
  }

}
