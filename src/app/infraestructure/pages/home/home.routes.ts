import { Routes } from '@angular/router';
import { homeGuard } from '../../guards/home.guard';
export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), children : [
            {
                path: '',
                loadComponent: () => import('./index/index.component').then(m => m.IndexComponent)
            },
            {
                path: 'buscados',
                loadComponent: () => import('./buscado/buscado.component').then(m => m.BuscadoComponent)
            },
            {
                path: 'buscados/registro', canActivate: [homeGuard],
                loadComponent: () => import('./registro-buscado/registro-buscado.component').then(m => m.RegistroBuscadoComponent)
            }
        ]
    },
 
];