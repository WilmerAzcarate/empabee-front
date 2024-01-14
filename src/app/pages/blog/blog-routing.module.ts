import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { environment } from '../../../environments/environment';

const BLOG_TITLE:string = environment.appName;
const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/blog/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomePageComponent,
        title:BLOG_TITLE+' - Home'
      },
      {
        path:'about',
        component:AboutPageComponent,
        title:BLOG_TITLE+' - About'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
