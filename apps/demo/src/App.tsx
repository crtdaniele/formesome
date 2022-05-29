import { useFormesome, Form, Status, Validations, OptionsRequired } from 'formesome';

type FormInput = { email: OptionsRequired } & { password: OptionsRequired };

export const loginForm: Form<FormInput> = {
  email: {
    inputName: 'email',
    required: true,
    validation: Validations.Email,
    value: '',
    status: Status.TYPING,
  },
  password: {
    inputName: 'password',
    required: true,
    validation: Validations.NotEmpty,
    value: '',
    status: Status.TYPING,
  },
};

const App: React.FC = () => {
  const { onChangeForm, formValue, formValueRequired, isValidRequiredInputs, isValidAllInputs } =
    useFormesome('loginForm', loginForm, true);

  console.log(formValue);
  console.log(formValueRequired);

  return (
    <div>
      <form>
        <p>
          <input
            type='text'
            name='email'
            defaultValue={formValue.email}
            onBlur={e => onChangeForm(e)}
          />
        </p>
        <p>
          <input
            type='text'
            name='password'
            defaultValue={formValue.password}
            onChange={e => onChangeForm(e)}
          />
        </p>
        <hr />
        {}
        <h3>
          Email:
          {formValue.email}
        </h3>
        <h3>
          Password:
          {formValue.password}
        </h3>
        <h3>
          isValidRequiredInputs:
          {isValidRequiredInputs ? 'OK' : 'NO'}
        </h3>
        <h3>
          isValidAllInputs:
          {isValidAllInputs ? 'OK' : 'NO'}
        </h3>
      </form>
    </div>
  );
};

export default App;
