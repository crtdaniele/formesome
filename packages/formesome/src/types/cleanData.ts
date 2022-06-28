import { FormStandard } from './form';

type CleanData<T extends FormStandard> = {
  // eslint-disable-next-line no-unused-vars
  [Property in keyof T]: string | number;
};

export { CleanData };
