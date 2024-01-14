import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { environment } from '../../../environments/environment';

const BLOG_TITLE:string = environment.appName;
const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path:'login',
        component:LoginPageComponent,
        title:BLOG_TITLE+' - '+'Login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
