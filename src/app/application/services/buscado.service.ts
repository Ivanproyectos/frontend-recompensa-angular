import { Injectable } from '@angular/core';
import { INivelPeligroIcon } from '../../domain/ports/nivelPeligro/nivelPeligro.dto';

@Injectable({
  providedIn: 'root'
})
export class BuscadoService  {

  constructor() { }

  public nivelPeligroIconClass: { [key: string]: INivelPeligroIcon } = {
    "Riesgo Bajo": { icon: "bx bx-shield-alt-2", className: "success" },
    "Moderado": { icon: "bx bx-info-circle", className: "primary" },
    "Peligroso": { icon: "bx bx-info-circle", className: "danger" }
  };

  getNivelPeligroIconStatus(nombre: string): string{
    return this.nivelPeligroIconClass[nombre].icon
  }

  getClassStatus(nombre: string): string{
    return this.nivelPeligroIconClass[nombre].className
  }
  

}
