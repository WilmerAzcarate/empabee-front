import { Component, OnInit } from '@angular/core';
import { InfoCard } from '../../../shared/models/info-card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  listInfo: InfoCard[];

  constructor() {
    this.listInfo = [];
  }

  ngOnInit(): void {
    this.listInfo = [
      {
        title: "Servicio Excepcional",
        descripcion: "El servicio personalizado y atento es una característica clave, con un personal altamente capacitado que se esfuerza por atender las necesidades individuales de cada huésped.",
        color:"text-danger"
      },
      {
        title: "Servicio Excepcional",
        descripcion: "El servicio personalizado y atento es una característica clave, con un personal altamente capacitado que se esfuerza por atender las necesidades individuales de cada huésped.",
        color:"text-success"
      },
    ];
  }

}
