import {
  CleanData,
  ImmutableForm,
  OptionsNotRequired,
  OptionsRequired,
} from '../types';

function extractData(form: ImmutableForm): CleanData {
  let cleanData = {};

  Object.values(form)
    .filter(
      (input: OptionsNotRequired | OptionsRequired) => input.required === true
    )
    .forEach((input: OptionsNotRequired | OptionsRequired) => {
      cleanData = { ...cleanData, [input.inputName]: input.value };
    });

  return cleanData;
}

export { extractData };
