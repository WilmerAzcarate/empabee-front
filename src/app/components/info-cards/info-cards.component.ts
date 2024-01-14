import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InfoCard } from '../../shared/models/info-card.model';

@Component({
  selector: 'app-info-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-cards.component.html',
  styleUrl: './info-cards.component.css'
})
export class InfoCardsComponent {
  @Input() info:InfoCard;

  constructor(){
    this.info = {
      title:"",
      descripcion:"",
      color:"text-danger"
    }
  }
}
