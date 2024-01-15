import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { CoreModule } from '../../core/core.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CoreService } from '../../shared/services/core.service';
import { InfoCardsComponent } from '../../components/info-cards/info-cards.component';
import { BotonInicioComponent } from '../../components/boton-inicio/boton-inicio.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';


@NgModule({
  declarations: [
    BlogPageComponent,
    AboutUsPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CoreModule,
    InfoCardsComponent,
    BotonInicioComponent
  ],
  providers:[
    CoreService
  ]
})
export class BlogModule { }
