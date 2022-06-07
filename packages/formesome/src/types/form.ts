import { CleanData } from './cleanData';
import { TypeInput } from './type';
import { Validations } from './validations';

export type InputValue = string | number | boolean;

export enum Status {
  VALID = 'VALID',
  ERROR = 'ERROR',
  EMPTY = 'EMPTY',
  TYPING = 'TYPING',
}

export type OptionsRequired = {
  type: TypeInput;
  inputName: string;
  required: true;
  validation: Validations | RegExp;
  value: InputValue;
  status: Status;
};

export type OptionsNotRequired = {
  type: TypeInput;
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
  readonly value: Readonly<CleanData<T>>;
  readonly valueRequired: CleanData<T>;
  readonly isValidRequiredInputs: boolean;
  readonly isValidAllInputs: boolean;
  onChangeForm: (e: unknown) => void;
  reset: () => void;
};

export type FormData = {
  [key: string]: {
    value: InputValue;
  };
};

export type FormContext<T extends FormStandard> = {
  form: Form<T>;
  value?: FormData;
  valueRequired?: FormData;
  isValidRequiredInputs: boolean;
  isValidAllInputs: boolean;
};
