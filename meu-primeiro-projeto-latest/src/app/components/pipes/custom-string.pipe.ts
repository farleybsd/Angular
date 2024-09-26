import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    
    console.log(value,args)

    if(args == 'upper'){
      return value.toUpperCase()
    }

    if(args == 'lower'){
      return value.toLocaleLowerCase()
    }
    return value;
  }

}
