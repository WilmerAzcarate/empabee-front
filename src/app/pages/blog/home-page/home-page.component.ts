import { Component, OnInit } from '@angular/core';
import { InfoCard } from '../../../shared/models/info-card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  portada: string;
  constructor() {
    this.portada = "";
  }
  ngOnInit(): void {
    this.portada = "/assets/images/resources/portada.png";
  }
}
