// weight.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {
  transform(value: number, unit: string = 'g'): string {
    if (isNaN(value) || value <= 0) {
      return '-';
    }

    switch (unit.toLowerCase()) {
      case 'g':
        return `${value} g`;
      case 'kg':
        const kgValue = value / 1000;
        return `${kgValue} kg`;
      default:
        return '-';
    }
  }
}
