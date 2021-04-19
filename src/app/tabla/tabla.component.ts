import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas:Array<any> = [
    {Nombre:'Felipe',Apellido:'Zumarraga',Edad:23},
    {Nombre:'Juan',Apellido:'Diaz',Edad:35},
    {Nombre:'Pedro',Apellido:'Perez',Edad:18}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
