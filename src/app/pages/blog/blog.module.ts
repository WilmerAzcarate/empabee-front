import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoreModule } from '../../core/core.module';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
  declarations: [
    BlogPageComponent,
    AboutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CoreModule
  ]
})
export class BlogModule { }
