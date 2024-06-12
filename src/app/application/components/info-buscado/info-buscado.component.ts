import { Component,Input } from '@angular/core';
import { IBuscadoResponse } from '../../../domain/ports/buscado/buscado.dto';
import { FormatoSolesPipe } from '../../../infraestructure/pipes/formato-soles.pipe';
import { BuscadoService } from '../../services/buscado.service';
import { INivelPeligroIcon, NivelPeligro } from '../../../domain/ports/nivelPeligro/nivelPeligro.dto';

@Component({
  selector: 'app-info-buscado',
  standalone: true,
  imports: [FormatoSolesPipe],
  providers: [BuscadoService],
  templateUrl: './info-buscado.component.html',
  styleUrl: './info-buscado.component.scss'
})
export class InfoBuscadoComponent {
  constructor() { }
  @Input() buscado!: IBuscadoResponse;
  nivelPeligro = NivelPeligro
  nivelPeligroStatus!: INivelPeligroIcon;
  ngOnInit(): void {
   this.nivelPeligroStatus = this.nivelPeligro[this.buscado.nivelPeligro?.nombre!] 
   ?? this.nivelPeligro['default']
  }
  

}
