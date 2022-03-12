import {
  ImmutableForm,
  OptionsNotRequired,
  OptionsRequired,
  Status,
} from '../types';

export const isAllInputsValid = (
  input: OptionsRequired | OptionsNotRequired
): boolean => input.status === Status.VALID;

export function isValidRequiredInputsFn(form: ImmutableForm): boolean {
  return Object.values(form)
    .filter(
      (input: OptionsRequired | OptionsNotRequired) => input.required === true
    )
    .every(isAllInputsValid);
}

export function isValidAllInputsFn(form: ImmutableForm): boolean {
  return Object.values(form).every(isAllInputsValid);
}
