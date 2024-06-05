import { Component } from '@angular/core';
import { BuscadoPort } from '../../../../domain/ports/buscado/buscado.port';
import { IBuscadoRequest } from '../../../../domain/ports/buscado/buscado.dto';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-buscado',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './buscado.component.html',
  styleUrl: './buscado.component.scss',
})
export class BuscadoComponent {
  buscados!: IBuscadoRequest[]
  constructor(private buscadoPort: BuscadoPort) { }

  ngOnInit(): void { 
   // this.listarTodos();
  }

  listarTodos(): void { 
    this.buscadoPort.listarTodos().then(buscados => this.buscados = buscados);
  }

}
