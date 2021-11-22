import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from "../interfaces/user.interface";

@Pipe({
  name: 'stringType'
})
export class StringTypePipe implements PipeTransform {

  transform(value: IUser): string {
    return `${value.id}). ${value.name} - ${value.email}`;
  }

}
