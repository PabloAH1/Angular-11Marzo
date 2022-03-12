import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MesesComponent } from './meses/meses.component';
import { DiasComponent } from './dias/dias.component';
import { ComidasComponent } from './comidas/comidas.component';
import { FormsModule } from '@angular/forms';
import { CiudadesComponent } from './ciudades/ciudades.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    ComidasComponent,
    CiudadesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
