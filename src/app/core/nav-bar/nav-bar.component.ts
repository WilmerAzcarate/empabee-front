import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  logo:string;

  constructor(){
    this.logo = "/assets/images/L_EmpaBee.png";
  }
}
