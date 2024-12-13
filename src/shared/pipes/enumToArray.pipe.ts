import { Pipe, PipeTransform } from '@angular/core';
import { EnumData } from '../../app/core/models/app.model';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: EnumData, sortAsc?: boolean) {
    const keys: { id: number; value: string | number }[] = [];

    for (const enumMember in data) {
      if (data[enumMember] && typeof data[enumMember] === 'string') {
        const dataString = data[enumMember].toString();
        data[enumMember] =
          dataString.charAt(0).toUpperCase() + dataString.slice(1);

        keys.push({ id: parseInt(enumMember), value: data[enumMember] });
      }
    }

    if (sortAsc)
      keys.sort((a, b) => (a.value > b.value ? 1 : b.value > a.value ? -1 : 0));

    return keys;
  }
}
