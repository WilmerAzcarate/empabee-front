import { Component,OnInit } from '@angular/core';
import { CoreService } from '../../shared/services/core.service';
import { ProfileModel } from '../../shared/models/profile.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  logo:string;
  profilePhoto:string;
  loged:boolean;

  constructor(
    private _coreService:CoreService
  ){
    this.logo = "/assets/images/logos/logo_empabee_2.png";
    this.profilePhoto = "";
    this.loged = false;
  }
  ngOnInit(): void {
    this.loged = !!(this._coreService.profile);
    if (this.loged) {
      let hasPersona:boolean = !!(this._coreService.profile?.persona);
      if(hasPersona){
        this.profilePhoto = this._coreService.profile!.persona!.urlImagen!;
      }
    }
  }

  getUser(){
    
  }
}
