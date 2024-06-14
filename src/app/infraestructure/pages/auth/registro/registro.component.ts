import { Component } from '@angular/core';
import { SessionService } from '../../../../application/services/session.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  token: string = '';
  constructor(public sessionService: SessionService) {
    this.token = this.sessionService.getToken();
   }

}
