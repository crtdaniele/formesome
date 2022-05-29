import { Validations, Status } from '../../src/types';
import { extractData } from '../../src/utils';

it('extractData', () => {
  const loginForm = {
    email: {
      inputName: 'email',
      required: true,
      validation: Validations.Email,
      value: '',
      status: Status.TYPING,
    },
  };

  const formRequiredValue = extractData(loginForm, false);

  expect(formRequiredValue).toStrictEqual({ email: '' });
});
