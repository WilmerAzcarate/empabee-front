import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  logo:string;

  constructor(){
    this.logo = "/assets/images/logos/logo_empabee_2.png";
  }
}
