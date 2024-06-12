import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ICategoriaRequest, categoriaIcon } from '../../../../domain/ports/categoria/categoria.dto';
import { CategoriaPort } from '../../../../domain/ports/categoria/categoria.port';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  categorias: ICategoriaRequest[] = [];
  categoriasIcon = categoriaIcon;

  constructor(
    private categoriaPort: CategoriaPort,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {  
    this.categoriaPort.listarTodos().then(categorias => this.categorias = categorias);
  }

  buscarPorCategoria(id : number): void {
    this.router.navigate(['/buscados'], { queryParams: { category: id } });
  }

}
