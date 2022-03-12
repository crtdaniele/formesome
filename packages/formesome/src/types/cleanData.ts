import { OptionsNotRequired, OptionsRequired } from './form';

type CleanData = {
  [key: string]:
    | Pick<OptionsRequired, 'value'>
    | Pick<OptionsNotRequired, 'value'>;
};

export { CleanData };
