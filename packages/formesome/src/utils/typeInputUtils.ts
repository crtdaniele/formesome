import { TypeInput } from '../types';

export function checkType(e: HTMLInputElement) {
  if (e.type === TypeInput.CHECKBOX) {
    return e.checked;
  } else {
    return e.value;
  }
}

export function converBooleanToString(value: boolean | string): string | undefined {
  if (typeof value === 'boolean') {
    if (value) {
      return 'true';
    }
    return 'false';
  }
}
