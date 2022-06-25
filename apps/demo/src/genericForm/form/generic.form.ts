import {
  Form,
  OptionsNotRequired,
  OptionsRequired,
  Status,
  TypeInput,
  Validations,
} from 'formesome';

type FormInput = {
  email: OptionsRequired;
  password: OptionsRequired;
  message: OptionsNotRequired;
  role: OptionsNotRequired;
  privacy1: OptionsNotRequired;
};

export const genericForm: Form<FormInput> = {
  email: {
    type: TypeInput.EMAIL,
    inputName: 'email',
    required: true,
    validation: Validations.Email,
    value: '',
    status: Status.TYPING,
  },
  password: {
    type: TypeInput.PASSWORD,
    inputName: 'password',
    required: true,
    validation: Validations.Min6Max9Digits,
    value: '',
    status: Status.TYPING,
  },
  message: {
    type: TypeInput.TEXT,
    inputName: 'message',
    required: false,
    value: '',
    status: Status.TYPING,
  },
  role: {
    type: TypeInput.RADIO,
    inputName: 'role',
    required: false,
    value: '',
    status: Status.TYPING,
  },
  privacy1: {
    type: TypeInput.CHECKBOX,
    inputName: 'privacy1',
    required: true,
    validation: Validations.IsTrue,
    value: false,
    status: Status.TYPING,
  },
};
