import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategoriaRequest } from '../../domain/ports/categoria/categoria.dto';
import { CategoriaPort} from '../../domain/ports/categoria/categoria.port';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export class CategoriaAdapter implements CategoriaPort {
    private urlApi = `${environment.apiEndpoint}/categorias`;
    private http = inject(HttpClient)
     listarTodos(): Promise<ICategoriaRequest[]> {
        return lastValueFrom(this.http.get<ICategoriaRequest[]>(this.urlApi))
    }

}