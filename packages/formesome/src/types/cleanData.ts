import { FormStandard, OptionsNotRequired, OptionsRequired } from './form';

type CleanData<T extends FormStandard> = {
  [Property in keyof T]: string | number;
};

export { CleanData };
