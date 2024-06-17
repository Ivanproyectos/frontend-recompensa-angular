import { Component,EventEmitter, Output, input } from '@angular/core';
import { Input } from '@angular/core';
import { IBuscadoResponse } from '../../../domain/ports/buscado/buscado.dto';
import { FormatoSolesPipe } from '../../../infraestructure/pipes/formato-soles.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { INivelPeligroIcon, NivelPeligro } from '../../../domain/ports/nivelPeligro/nivelPeligro.dto';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-buscado',
  standalone: true,
  imports: [FormatoSolesPipe,NgxSkeletonLoaderModule,NgOptimizedImage],
  templateUrl: './card-buscado.component.html',
  styleUrl: './card-buscado.component.scss'
})
export class CardBuscadoComponent {
  @Input() buscado!: IBuscadoResponse;
  @Input() loadingSkeleton: boolean = false;
  @Output() btnVerMas =  new EventEmitter<number>();
  nivelPeligro = NivelPeligro
  nivelPeligroStatus!: INivelPeligroIcon;

  ngOnInit(){
    if(!this.loadingSkeleton){
      this.nivelPeligroStatus = this.nivelPeligro[this.buscado.nivelPeligro?.nombre!] 
    ?? this.nivelPeligro['default']
    }
  }


  verMas(id: number): void {
    this.btnVerMas.emit(id);
  }

}
