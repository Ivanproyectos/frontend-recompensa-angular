import { Component,Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() btnIngresar = new EventEmitter<void>();
  isOpenMenu:boolean= false;

  ingresar() {
    this.btnIngresar.emit();
  }

  constructor() { } 
  toggleMenu() {
   // const menu = document.querySelector('.header__menu_nav');
   // menu?.classList.toggle('active');
    this.isOpenMenu = !this.isOpenMenu
  }

}
