import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

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
        data: {
          title: 'Home'
        }
      },
      {
        path:'about',
        component:AboutPageComponent,
        data:{
          title:'About'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
