import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { inputAtomFamily } from '../store';
import {
  CleanData,
  Form,
  FormContext,
  FormStandard,
  InputValue,
  InputEvent,
  ReturnHook,
  Status,
  TypeInput,
} from '../types';
import {
  checkType,
  converBooleanToString,
  isValidAllInputsFn,
  isValidRequiredInputsFn,
} from '../utils';
import { extractData } from '../utils/extractData';

/**
 * Hook to create a new form and validate automatically your inputs
 * @param name name of the form
 * @param initialForm the config of your form
 * @param debug true to active the debug mode
 * @returns {value} the object with the all inputs
 * @returns {valueRequired} the object with the all required value
 * @returns {isValidRequiredInputs} boolean that return if all required inputs are valid
 * @returns {isValidAllInputs} boolean that return if all inputs are valid
 * @returns {reset} the method to reset the form
 * @returns {setInput} the method to use set the value of the input
 * @returns {setCustomInput} the custom method to set a value for an input
 */
const useFormesome = <T extends FormStandard>(
  name: string,
  initialForm: Form<T>,
  debug: boolean = false,
): ReturnHook<T> => {
  /**
   * The recoil atom to use to save momentanely the value of the input
   */
  const setInputForm = useSetRecoilState(inputAtomFamily);
  const inputForm = useRecoilValue(inputAtomFamily);

  /**
   * The internal state of the form
   */
  const [data, setData] = useState<FormContext<T>>({
    form: initialForm,
    value: {},
    valueRequired: {},
    isValidRequiredInputs: false,
    isValidAllInputs: false,
  });

  const handleSetForm = useCallback(
    (inputName: keyof Form<T>, inputValue: InputValue, status: Status) => {
      const nextForm = {
        ...data.form,
        [inputName]: {
          ...data.form[inputName],
          value: inputValue,
          status,
        },
      };
      setData({
        form: nextForm,
        value: data.value,
        valueRequired: data.valueRequired,
        isValidRequiredInputs: data.isValidAllInputs || false,
        isValidAllInputs: data.isValidAllInputs || false,
      });
    },
    [data.form],
  );

  /**
   * Set the initial form in data variable
   */
  useEffect(() => {
    setData({
      form: initialForm,
      value: {},
      valueRequired: {},
      isValidRequiredInputs: false,
      isValidAllInputs: false,
    });
  }, [initialForm, name]);

  /**
   * The core of the validations of the input
   */
  useEffect(() => {
    //* * Get the name and value from Recoil state
    const inputValue = inputForm.value;
    // TODO: verify if inputName exist in the current form
    const inputName = inputForm.name;

    if (inputForm.status) {
      return handleSetForm(inputName, inputValue, inputForm.status);
    }

    if (data && data.form && inputForm.value !== '') {
      if (data.form[inputName].validation !== undefined) {
        const { validation } = data.form[inputName];
        const regex = new RegExp(validation || '');

        // eslint-disable-next-line operator-linebreak
        const checkCondition =
          data.form[inputName].type === TypeInput.CHECKBOX
            ? converBooleanToString(inputValue) === validation
            : regex.test(inputValue as string);

        if (checkCondition) {
          handleSetForm(inputName, inputValue, Status.VALID);
        } else {
          handleSetForm(inputName, inputValue, Status.ERROR);
        }
      } else {
        handleSetForm(inputName, inputValue, Status.VALID);
      }
    }

    return () => {};
  }, [inputForm]);

  /**
   * Debug method
   */
  useEffect(() => {
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(data.form);
    }
  }, [debug, data.form]);

  /**
   * If all required inputs are valid
   * @return boolean
   */
  const isValidRequiredInputs = useMemo((): boolean => {
    const formInputs = data.form;
    return formInputs ? isValidRequiredInputsFn<T>(formInputs) : false;
  }, [data.form]);

  /**
   * If all inputs are valid
   * @return boolean
   */
  const isValidAllInputs = useMemo((): boolean => {
    const formInputs = data.form;
    return formInputs ? isValidAllInputsFn<T>(formInputs) : false;
  }, [data.form]);

  /**
   * An object with the inputs and the value for all inputs
   * @return object
   */
  const value = useMemo(() => {
    const formInputs = data.form;
    return formInputs ? extractData<T>(formInputs, true) : ({} as CleanData<T>);
  }, [data.form]);

  /**
   * An object with the required inputs and the value for all inputs
   * @return object
   */
  const valueRequired = useMemo(() => {
    const formInputs = data.form;
    return formInputs ? extractData<T>(formInputs, false) : ({} as CleanData<T>);
  }, [data.form]);

  /**
   * The API that use to set a value for the input with the default validation of the library
   * @param e the InputEvent for onChange or onBlur
   */
  const setInput = useCallback((e: InputEvent) => {
    const name = e.target.name;
    const type = data.form[name].type;
    setInputForm({
      name,
      value: checkType(e, type),
    });
  }, []);

  /**
   * The API that use to add a custom validate for the specific input
   * @param name the name of the input
   * @param value the new value for the input
   * @param status the status of the input, use Status from library
   */
  const setCustomInput = useCallback((name: string, value: InputValue, status: Status) => {
    setInputForm({
      name,
      value,
      status,
    });
  }, []);

  /**
   * The API that use to reset all data in the form
   */
  const reset = useCallback(() => {
    setData({
      form: initialForm,
      value: {},
      valueRequired: {},
      isValidRequiredInputs: false,
      isValidAllInputs: false,
    });
  }, []);

  return {
    value,
    valueRequired,
    isValidRequiredInputs,
    isValidAllInputs,
    setInput,
    setCustomInput,
    reset,
  };
};

export { useFormesome };
