import { inject } from '@angular/core';
import { IBuscadoRequest, IBuscadoResponse } from '../../domain/ports/buscado/buscado.dto';
import { BuscadoPort } from '../../domain/ports/buscado/buscado.port'
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
export class BuscadoAdapter implements BuscadoPort {
  private urlApi = `${environment.apiEndpoint}/buscados`;
  private http: HttpClient = inject(HttpClient);
  obtenerBuscadoPorId(id: number): Promise<IBuscadoResponse> {
    return lastValueFrom(this.http.get<IBuscadoResponse>(`${this.urlApi}/${id}`));
  }

  listarTodos(filtro: IBuscadoRequest): Promise<IBuscadoResponse[]> {
    const endpoint = `${this.urlApi}?categoryId=${filtro.categoriaId}&filter=${filtro.filter}`;
    return lastValueFrom(this.http.get<IBuscadoResponse[]>(endpoint));
  }

}
