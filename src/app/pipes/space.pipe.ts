import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space'
})
export class SpacePipe implements PipeTransform {

  transform(value: string): string {
    let re = / /g;
    let final = value.replace(re, "-");
    return final;
  }

}
