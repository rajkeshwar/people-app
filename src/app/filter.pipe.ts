import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

  transform(peopleList: string[], search?: string): any[] {
    if(!peopleList) return [];
    if(!search) return peopleList;
    
    return peopleList.filter((people: any) => {
      return people.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

}
