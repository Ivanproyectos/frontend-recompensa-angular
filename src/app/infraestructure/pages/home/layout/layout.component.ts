import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../application/components/header/header.component'
import { FooterComponent } from '../../../../application/components/footer/footer.component'
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
