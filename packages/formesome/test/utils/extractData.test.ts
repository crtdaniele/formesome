import { Validations, Status, TypeInput } from '../../src/types';
import { extractData } from '../../src/utils';

describe('useFormesome', () => {
  it('should return the all required inputs', () => {
    const loginForm = {
      email: {
        type: TypeInput.EMAIL,
        inputName: 'email',
        required: true,
        validation: Validations.Email,
        value: '',
        status: Status.VALID,
      },
    };

    const formRequiredValue = extractData(loginForm, false);

    expect(formRequiredValue).toStrictEqual({ email: '' });
  });

  it('should return the all inputs', () => {
    const loginForm = {
      email: {
        type: TypeInput.EMAIL,
        inputName: 'email',
        required: true,
        validation: Validations.Email,
        value: '',
        status: Status.VALID,
      },
      password: {
        type: TypeInput.PASSWORD,
        inputName: 'password',
        required: false,
        validation: Validations.NotEmpty,
        value: '',
        status: Status.VALID,
      },
    };

    const formRequiredValue = extractData(loginForm, true);

    expect(formRequiredValue).toStrictEqual({ email: '', password: '' });
  });
});
