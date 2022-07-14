import {
  CleanData,
  Form,
  FormStandard,
  OptionsNotRequired,
  OptionsRequired,
  Status,
} from '../types';

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

function extractErrors<T extends FormStandard>(form: Form<T>): CleanData<T> {
  let cleanData = {} as CleanData<T>;

  Object.values(form).forEach((input: OptionsNotRequired | OptionsRequired) => {
    const isError = input.status === Status.ERROR;
    const isEmpty = input.status === Status.EMPTY;

    if (isError || isEmpty) {
      cleanData = { ...cleanData, [input.inputName]: input.status };
    }
  });

  return cleanData;
}

export { extractData, extractErrors };
