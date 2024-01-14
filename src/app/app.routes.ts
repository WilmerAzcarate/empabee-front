import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/blog/home-page/home-page.component';
import { AboutPageComponent } from './pages/blog/about-page/about-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/blog/home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
    },
];
