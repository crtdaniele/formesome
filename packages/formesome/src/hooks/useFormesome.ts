import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  CleanData,
  Form,
  FormContext,
  FormStandard,
  InputValue,
  ReturnHook,
  Status,
} from '../types';
import { isValidAllInputsFn, isValidRequiredInputsFn } from '../utils';
import { extractData } from '../utils/extractData';

/**
 * Hook to create a new form and validate automatically your inputs
 * @param name name of the form
 * @param initialForm the config of your form
 * @param debug true to active the debug mode
 * @returns {formValue} the object with the all inputs
 * @returns {formRequiredValue} the object with the all required value
 * @returns {isValidRequiredInputs} boolean that return if all required inputs are valid
 * @returns {isValidAllInputs} boolean that return if all inputs are valid
 * @returns {onChangeForm} the method to use in the input field
 */
const useFormesome = <T extends FormStandard>(
  name: string,
  initialForm: Form<T>,
  debug: boolean = false,
): ReturnHook<T> => {
  const [data, setData] = useState<FormContext<T>>({
    form: initialForm,
    formValue: {},
    formValueRequired: {},
    isValidRequiredInputs: false,
    isValidAllInputs: false,
  });

  /**
   * Set the initial form in data variable
   */
  useEffect(() => {
    setData({
      form: initialForm,
      formValue: {},
      formValueRequired: {},
      isValidRequiredInputs: false,
      isValidAllInputs: false,
    });
  }, [initialForm, name]);

  const isValidRequiredInputs = useMemo((): boolean => {
    const formInputs = data.form;
    return formInputs ? isValidRequiredInputsFn<T>(formInputs) : false;
  }, [data.form]);

  const isValidAllInputs = useMemo((): boolean => {
    const formInputs = data.form;
    return formInputs ? isValidAllInputsFn<T>(formInputs) : false;
  }, [data.form]);

  const formValue = useMemo(() => {
    const formInputs = data.form;
    return formInputs ? extractData<T>(formInputs, true) : ({} as CleanData<T>);
  }, [data.form]);

  const formValueRequired = useMemo(() => {
    const formInputs = data.form;
    return formInputs ? extractData<T>(formInputs, false) : ({} as CleanData<T>);
  }, [data.form]);

  const handleSetForm = useCallback(
    (form: Form<T>, inputName, inputValue: InputValue, status: Status) => {
      const nextForm = {
        ...form,
        [inputName]: {
          ...form[inputName],
          value: inputValue,
          status: status,
        },
      };
      setData({
        form: nextForm,
        formValue: data.formValue,
        formValueRequired: data.formValueRequired,
        isValidRequiredInputs: data.isValidAllInputs || false,
        isValidAllInputs: data.isValidAllInputs || false,
      });
    },
    [],
  );

  const onChangeForm = useCallback(
    e => {
      const inputValue = e.target.value;
      const inputName = e.target.name;

      if (data && data.form) {
        if (data.form[inputName].validation !== undefined) {
          const { validation } = data.form[inputName];
          const regex = new RegExp(validation || '');

          if (regex.test(inputValue)) {
            handleSetForm(data.form, inputName, inputValue, Status.VALID);
          } else {
            handleSetForm(data.form, inputName, inputValue, Status.ERROR);
          }
        } else {
          handleSetForm(data.form, inputName, inputValue, Status.VALID);
        }
      }
    },
    [data, handleSetForm],
  );

  /**
   * Debug method
   */
  useEffect(() => {
    if (debug) {
      console.log(data.form);
    }
  }, [debug, data.form]);

  return {
    formValue: formValue,
    formValueRequired: formValueRequired,
    isValidRequiredInputs,
    isValidAllInputs,
    onChangeForm,
  };
};

export { useFormesome };
