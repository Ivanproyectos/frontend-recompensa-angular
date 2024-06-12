import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title!: string; 
  @Output() close = new  EventEmitter<boolean>();
  withModal = 'modal--small';

  closeModal(): void {
    this.isOpen = !this.isOpen;
    this.close.emit(this.isOpen);
  }

}
