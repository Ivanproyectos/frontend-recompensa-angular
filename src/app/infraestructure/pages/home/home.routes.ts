import { Routes } from '@angular/router';
export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), children : [
            {
                path: '',
                loadComponent: () => import('./index/index.component').then(m => m.IndexComponent)
            },
            {
                path: 'buscado',
                loadComponent: () => import('./buscado/buscado.component').then(m => m.BuscadoComponent)
            }
        ]
    },
 
];