import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublepipeDemo'
})
export class DoublepipeDemoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 2;
  }

}
