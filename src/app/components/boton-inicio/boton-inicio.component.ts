import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-mi-boton',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './boton-inicio.component.html',
  styleUrl: './boton-inicio.component.css'
})
export class BotonInicioComponent {
  @Input() ruta: string;

  constructor() {
    this.ruta="";  
  }
}
