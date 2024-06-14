import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBuscadoComponent } from './registro-buscado.component';

describe('RegistroBuscadoComponent', () => {
  let component: RegistroBuscadoComponent;
  let fixture: ComponentFixture<RegistroBuscadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroBuscadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroBuscadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
