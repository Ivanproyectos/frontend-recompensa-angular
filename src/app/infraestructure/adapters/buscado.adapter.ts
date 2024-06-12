import { inject } from '@angular/core';
import { IBuscadoRequest, IBuscadoResponse } from '../../domain/ports/buscado/buscado.dto';
import { BuscadoPort } from '../../domain/ports/buscado/buscado.port'
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
export class BuscadoAdapter implements BuscadoPort {
  private http: HttpClient = inject(HttpClient)
  obtenerBuscadoPorId(id: number): Promise<IBuscadoResponse> {
    return lastValueFrom(this.http.get<IBuscadoResponse>(`http://localhost:3000/api/buscados/${id}`))
  }

  listarTodos(filtro: IBuscadoRequest): Promise<IBuscadoResponse[]> {
    const url = `http://localhost:3000/api/buscados?categoryId=${filtro.categoriaId}&filter=${filtro.filter}`;
    return lastValueFrom(this.http.get<IBuscadoResponse[]>(url));
  }

}
