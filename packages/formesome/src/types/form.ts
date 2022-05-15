import { CleanData } from './cleanData';
import { Validations } from './validations';

export type InputValue = string | number;

export enum Status {
  VALID = 'VALID',
  ERROR = 'ERROR',
  EMPTY = 'EMPTY',
  TYPING = 'TYPING',
}

export type OptionsRequired = {
  inputName: string;
  required: true;
  validation: Validations | RegExp;
  value: InputValue;
  status: Status;
};

export type OptionsNotRequired = {
  inputName: string;
  required: false;
  validation?: Validations;
  value: InputValue;
  status: Status;
};

export type FormStandard = { [key: string]: OptionsRequired | OptionsNotRequired };

export type Form<T extends FormStandard> = {
  [Property in keyof T]: OptionsRequired | OptionsNotRequired;
};

export type FormRequired<T extends FormStandard> = {
  [Property in keyof T]: OptionsRequired;
};

export type FormNotRequired<T extends FormStandard> = {
  [Property in keyof T]: OptionsNotRequired;
};

export type ReturnHook<T extends FormStandard> = {
  readonly formValue: Readonly<CleanData<T>>;
  readonly formValueRequired: CleanData<T>;
  readonly isValidRequiredInputs: boolean;
  readonly isValidAllInputs: boolean;
  onChangeForm: (e: unknown) => void;
};

export type FormData = {
  [key: string]: {
    value: InputValue;
  };
};

export type FormContext<T extends FormStandard> = {
  form: Form<T>;
  formValue?: FormData;
  formValueRequired?: FormData;
  isValidRequiredInputs: boolean;
  isValidAllInputs: boolean;
};
