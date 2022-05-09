import { Form, Status, Validations } from 'formesome';

export const loginForm: Form = {
  email: {
    inputName: 'email',
    required: true,
    validation: Validations.Email,
    value: '',
    status: Status.TYPING,
  },
  password: {
    inputName: 'password',
    required: false,
    validation: Validations.NotEmpty,
    value: '',
    status: Status.TYPING,
  },
};
