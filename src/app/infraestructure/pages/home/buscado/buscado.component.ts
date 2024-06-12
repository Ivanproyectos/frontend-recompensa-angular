import { Component,ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadoPort } from '../../../../domain/ports/buscado/buscado.port';
import { CategoriaPort } from '../../../../domain/ports/categoria/categoria.port';
import { IBuscadoRequest, IBuscadoResponse } from '../../../../domain/ports/buscado/buscado.dto';
import { CardBuscadoComponent } from '../../../../application/components/card-buscado/card-buscado.component';
import { InfoBuscadoComponent } from '../../../../application/components/info-buscado/info-buscado.component';
import { ModalComponent } from '../../../../application/components/modal/modal.component';
import { ICategoriaRequest } from '../../../../domain/ports/categoria/categoria.dto';
import { FormsModule } from '@angular/forms';
import { NgxRepeatDirective } from 'ngx-repeat';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscado',
  standalone: true,
  imports: [
    CardBuscadoComponent,
    InfoBuscadoComponent,
    ModalComponent,
    FormsModule,
    NgxRepeatDirective,
    CommonModule],
  templateUrl: './buscado.component.html',
  styleUrl: './buscado.component.scss',
})
export class BuscadoComponent {
  constructor(
    private buscadoPort: BuscadoPort,
    private categoriaPort: CategoriaPort,
    private title: Title,
    private route: ActivatedRoute
  ) {
    this.title.setTitle("buscados");
   }
   @ViewChild('skeletonBuscado', { static: true }) skeletonBuscado!: ElementRef;
  filtro: IBuscadoRequest = { categoriaId: '', filter: '' }
  buscados!: IBuscadoResponse[];
  buscado!: IBuscadoResponse;
  categorias!: ICategoriaRequest[];
  isOpenModal: boolean = false;
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.filtro.categoriaId = params['category'] || '';
    });
    setTimeout(() => {
      this.cargarBuscados();
      this.skeletonBuscado.nativeElement.remove();
    }, 2000);
    this.cargarCategorias();
  }
  async cargarBuscados(): Promise<void> {
    this.buscados = await this.buscadoPort.listarTodos(this.filtro);

  }
 async cargarCategorias(): Promise<void>{
    this.categorias = await this.categoriaPort.listarTodos();
  }

  mostrarBuscarPorId(id: number): void {
    this.buscadoPort.obtenerBuscadoPorId(id)
      .then(buscado => {
        this.buscado = buscado;
        this.isOpenModal = true;
      });
  }
  async filtrarBuscados(): Promise<void> {
   await this.cargarBuscados();
   console.log(this.buscados)
  }
  closeModal(isOpen: boolean): void {
    this.isOpenModal = isOpen;
  }

}
