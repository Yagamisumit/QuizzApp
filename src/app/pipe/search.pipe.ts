import { Pipe, PipeTransform } from '@angular/core';
import {DataModel} from '../model/DataModel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(quiz: DataModel[], searchText: string): DataModel[] {
    if (!quiz || !searchText) {
      return quiz;
    }
    // @ts-ignore
    // tslint:disable-next-line:no-shadowed-variable
    // tslint:disable-next-line:no-shadowed-variable
    return quiz.filter( res =>
      res.Title.toLowerCase().match(searchText.toLowerCase())
    );
  }

}
