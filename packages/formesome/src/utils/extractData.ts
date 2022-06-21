import { CleanData, Form, FormStandard, OptionsNotRequired, OptionsRequired } from '../types';

function extractData<T extends FormStandard>(form: Form<T>, allInputs: boolean): CleanData<T> {
  let cleanData = {} as CleanData<T>;

  if (allInputs) {
    Object.values(form).forEach((input: OptionsNotRequired | OptionsRequired) => {
      cleanData = { ...cleanData, [input.inputName]: input.value };
    });
  } else {
    Object.values(form)
      .filter((input: OptionsNotRequired | OptionsRequired) => input.required === true)
      .forEach((input: OptionsNotRequired | OptionsRequired) => {
        cleanData = { ...cleanData, [input.inputName]: input.value };
      });
  }

  return cleanData;
}

export { extractData };
