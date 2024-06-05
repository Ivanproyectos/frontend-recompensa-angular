import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { BuscadoPort } from './domain/ports/buscado/buscado.port'
import { BuscadoAdapter } from './infraestructure/adapters/buscado.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(), 
     {
      provide: BuscadoPort, 
      useClass: BuscadoAdapter
     }
    ]
};
