import { Pipe, PipeTransform } from "@angular/core";
import { BookFormat } from '../models/BookFormat';

@Pipe({
  name: 'bookFormat'
})
export class BookFormatPipe implements PipeTransform {
  transform(enumValue: number) {
    return BookFormat[enumValue].toString();
  }
}
