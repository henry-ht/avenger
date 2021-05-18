import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroeFilter'
})
export class HeroeFilterPipe implements PipeTransform {

  transform(items: any[], key:string, key2:string,  key3:string, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it[key].toLowerCase().includes(searchText) || it[key2].toLowerCase().includes(searchText) || it[key3].toLowerCase().includes(searchText);
        });
   }

}
