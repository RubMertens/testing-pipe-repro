import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'displayValue'
})
export class DisplayValuePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }
}
