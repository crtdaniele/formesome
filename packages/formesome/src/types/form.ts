import { Immutable } from 'immer';
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

export type Form = {
  [key: string]: OptionsRequired | OptionsNotRequired;
};

export type FormRequired = {
  [key: string]: OptionsRequired;
};

export type FormNotRequired = {
  [key: string]: OptionsNotRequired;
};

export type ReturnHook = {
  form: Form;
  formRequiredValue: CleanData;
  onChangeForm: (e: unknown) => void;
  isValidRequiredInputs: boolean;
  isValidAllInputs: boolean;
};

export type FormRequiredData = {
  [key: string]: {
    value: InputValue;
  };
};

export type FormContext = {
  form: Form;
  isValidRequiredInputs: boolean;
  isValidAllInputs: boolean;
  requiredFormData?: FormRequiredData;
};

export type ImmutableFormContext = Immutable<FormContext>;
export type ImmutableOptionsRequired = Immutable<OptionsRequired>;

export type ImmutableForm = Immutable<Form>;
export type ImmutableFormRequired = Immutable<FormRequired>;
export type ImmutableFormNotRequired = Immutable<FormNotRequired>;