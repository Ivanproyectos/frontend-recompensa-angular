import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../application/components/header/header.component'
import { FooterComponent } from '../../../../application/components/footer/footer.component'
import { RouterOutlet} from '@angular/router';
import { SessionService } from '../../../../application/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterOutlet],
  providers: [SessionService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
 constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
   
 }
  ingresar() {
    if(!this.sessionService.hasSession())
    {
      this.router.navigate(['/login']);
    }else {
      this.router.navigate(['/buscados/registro']);
    }
  }

}
