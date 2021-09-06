import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: string[], search: string): string[] {
    if (!search.trim()) return list;
    return list.filter(tempList => {
      return tempList.toLowerCase().includes(search.toLowerCase());
    })
  }

}
