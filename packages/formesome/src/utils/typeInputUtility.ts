import { TypeInput, InputEvent, InputValue } from '../types';

export function checkType(e: InputEvent, type: TypeInput) {
  if (type === TypeInput.CHECKBOX) {
    return (e.target as any).checked;
  }
  return e.target.value;
}

export function converBooleanToString(value: InputValue): string | undefined {
  if (typeof value === 'boolean') {
    if (value) {
      return 'true';
    }
    return 'false';
  }
  return 'false';
}
