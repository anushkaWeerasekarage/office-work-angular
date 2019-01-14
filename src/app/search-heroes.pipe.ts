import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHeroes'
})
export class SearchHeroesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === undefined) {
      return value;
    }
      return value.filter(item => {
        for(let key in item) {
          if((typeof item[key] === 'string' || item[key] instanceof String) && (item[key].indexOf(args)>-1)/*(item[key.indexOf[args[0]]] !== -1)*/) {
            return true;
          }
        }
      })
  
  }
}

