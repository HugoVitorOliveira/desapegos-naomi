import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[cepFormat]',
  standalone: true,
})
export class CepFormatDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(_event: any) {
    const clearedValue = this.clearValue(_event.target.value);
    const formatedValue = this.formatValue(clearedValue, '99999-999');
    _event.target.value = formatedValue;
  }

  private clearValue(value: string) {
    const clearedValue = String(value).match(/[0-9]/g) || [];

    return clearedValue.join('');
  }

  private formatValue(value = '', mask = '') {
    value = value.toString();

    const output = [];
    let count = 0;

    for (let i = 0; i < mask.length; i++) {
      if (value[i + count] != undefined) {
        if (mask[i] == '9') {
          if (new RegExp(/[0-9]/).test(value[i + count])) {
            output.push(value[i + count]);
          }
        } else if (mask[i] == 'A') {
          if (new RegExp(/[a-zA-Z]/).test(value[i + count])) {
            output.push(value[i + count]);
          }
        } else if (mask[i] == undefined) {
          break;
        } else {
          output.push(mask[i]);
          count--;
        }
      }
    }

    return output.join('');
  }
}
