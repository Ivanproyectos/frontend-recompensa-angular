import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoSoles',
  standalone: true
})
export class FormatoSolesPipe implements PipeTransform {

  transform(value: string): string {
    const formattedNumber = Number(value).toLocaleString('es-PE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `s/ ${formattedNumber}`;
  }

}
