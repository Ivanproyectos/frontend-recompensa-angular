import { inject } from '@angular/core';
import { IBuscadoRequest } from '../../domain/ports/buscado/buscado.dto';
import { BuscadoPort } from '../../domain/ports/buscado/buscado.port'
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
export class BuscadoAdapter implements BuscadoPort {

   // constructor(private http: HttpClient) { }
     private http: HttpClient = inject(HttpClient)
     listarTodos(): Promise<IBuscadoRequest[]> {
        return lastValueFrom(this.http.get<IBuscadoRequest[]>('https://api-recompensa-node-production.up.railway.app/api/buscados/'))
    }

}

