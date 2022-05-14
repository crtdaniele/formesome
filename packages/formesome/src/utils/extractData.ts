import {
  CleanData,
  ImmutableForm,
  OptionsNotRequired,
  OptionsRequired,
} from '../types';

function extractData(form: ImmutableForm, allInputs: boolean): CleanData {
  let cleanData = {};

  if(allInputs) {
    Object.values(form)
    .forEach((input: OptionsNotRequired | OptionsRequired) => {
      cleanData = { ...cleanData, [input.inputName]: input.value };
    });
  }else{
    Object.values(form)
    .filter(
      (input: OptionsNotRequired | OptionsRequired) => input.required === true
    )
    .forEach((input: OptionsNotRequired | OptionsRequired) => {
      cleanData = { ...cleanData, [input.inputName]: input.value };
    });
  }

  return cleanData;
}

export { extractData };
