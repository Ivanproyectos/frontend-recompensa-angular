import { Component } from '@angular/core';
import { SessionService } from '../../../../application/services/session.service';

@Component({
  selector: 'app-registro-buscado',
  standalone: true,
  imports: [],
  templateUrl: './registro-buscado.component.html',
  styleUrl: './registro-buscado.component.scss'
})
export class RegistroBuscadoComponent {
  token: string = '';
  constructor(public sessionService: SessionService) {
    this.token = this.sessionService.getToken();
   }
}
