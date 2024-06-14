import { Component,Output, EventEmitter  } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() btnIngresar = new EventEmitter<void>();

  ingresar() {
    this.btnIngresar.emit();
  }

}
