import { useCallback, useEffect, useMemo, useState } from 'react';
import { produce } from 'immer';
import {
  Form,
  ImmutableFormContext,
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
 * @returns {form} the all inputs and config of the form
 * @returns {formRequiredValue} the object with the all required value
 * @returns {isValidRequiredInputs} boolean that return if all required inputs are valid
 * @returns {isValidAllInputs} boolean that return if all inputs are valid
 * @returns {onChangeForm} the method to use in the input field
 */
const useFormesome = (name: string, initialForm: Form): ReturnHook => {
  const [data, setData] = useState<ImmutableFormContext>();

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
    const formInputs = data?.form;
    return formInputs ? isValidRequiredInputsFn(formInputs) : false;
  }, [data?.form]);

  const isValidAllInputs = useMemo((): boolean => {
    const formInputs = data?.form;
    return formInputs ? isValidAllInputsFn(formInputs) : false;
  }, [data?.form]);

  const formValue = useMemo(() => {
    const formInputs = data?.form;
    return formInputs ? extractData(formInputs, true) : {};
  }, [data?.form]);

  const formValueRequired = useMemo(() => {
    const formInputs = data?.form;
    return formInputs ? extractData(formInputs, false) : {};
  }, [data?.form]);

  const handleSetForm = useCallback(
    (
      form: ImmutableFormContext,
      inputName,
      inputValue: InputValue,
      status: Status
    ) => {
      const nextState = produce<ImmutableFormContext>(form, (draftForm) => {
        draftForm.form[inputName].value = inputValue;
        draftForm.form[inputName].status = status;
      });
      setData(nextState);
    },
    []
  );

  const onChangeForm = useCallback(
    (e) => {
      const inputValue = e.target.value;
      const inputName = e.target.name;

      if (data && data.form) {
        if (data.form[inputName].validation !== undefined) {
          const { validation } = data.form[inputName];
          const regex = new RegExp(validation || '');

          if (regex.test(inputValue)) {
            handleSetForm(data, inputName, inputValue, Status.VALID);
          } else {
            handleSetForm(data, inputName, inputValue, Status.ERROR);
          }
        } else {
          handleSetForm(data, inputName, inputValue, Status.VALID);
        }
      }
    },
    [data, handleSetForm]
  );

  return {
    form: (data && data.form) || {},
    formValue,
    formValueRequired,
    isValidRequiredInputs,
    isValidAllInputs,
    onChangeForm,
  };
};

export { useFormesome };
