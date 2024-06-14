import { Routes } from '@angular/router';

export const routes: Routes = [
 {path: '', loadChildren: () => import('./infraestructure/pages/home/home.routes').then(m => m.HOME_ROUTES), },
 {path: 'login', pathMatch: 'full',
    loadComponent: () => import('./infraestructure/pages/auth/login/login.component').then(m => m.LoginComponent), },
 {path: 'registro', pathMatch: 'full',
  loadComponent: () => import('./infraestructure/pages/auth/registro/registro.component').then(m => m.RegistroComponent), }
];
