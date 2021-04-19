import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    Cuerpo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
