import { FormStandard, OptionsNotRequired, OptionsRequired } from './form';

type CleanData<T extends FormStandard> = {
  [Property in keyof T]:
    | Pick<OptionsRequired, 'value'>
    | Pick<OptionsNotRequired, 'value'>;
};

export { CleanData };
