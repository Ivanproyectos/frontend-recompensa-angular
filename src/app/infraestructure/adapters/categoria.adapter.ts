import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategoriaRequest } from '../../domain/ports/categoria/categoria.dto';
import { CategoriaPort} from '../../domain/ports/categoria/categoria.port';
import { lastValueFrom } from 'rxjs';

export class CategoriaAdapter implements CategoriaPort {
    private http = inject(HttpClient)
     listarTodos(): Promise<ICategoriaRequest[]> {
        return lastValueFrom(this.http.get<ICategoriaRequest[]>('http://localhost:3000/api/categorias'))
    }

}