import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo3',
  templateUrl: './cuerpo3.component.html',
  styleUrls: ['./cuerpo3.component.css']
})
export class Cuerpo3Component implements OnInit {

  lista: string[] = ['Elemento 1','Elemento 2','Elemento 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
