import {
  useFormesome,
  Form,
  Status,
  Validations,
  OptionsRequired,
  OptionsNotRequired,
  TypeInput,
} from 'formesome';

type FormInput = {
  email: OptionsRequired;
  password: OptionsRequired;
  message: OptionsNotRequired;
  role: OptionsNotRequired;
  privacy1: OptionsNotRequired;
};

export const loginForm: Form<FormInput> = {
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
    validation: Validations.NotEmpty,
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

const App: React.FC = () => {
  const { onChangeForm, value, isValidRequiredInputs, isValidAllInputs } = useFormesome(
    'loginForm',
    loginForm,
    true,
  );

  return (
    <div>
      <form>
        <p>
          <input
            type={loginForm.email.type}
            name={loginForm.email.inputName}
            defaultValue={value.email}
            onBlur={e => onChangeForm(e)}
          />
        </p>
        <p>
          <input
            type={loginForm.password.type}
            name={loginForm.password.inputName}
            defaultValue={value.password}
            onChange={e => onChangeForm(e)}
          />
        </p>
        <p>
          <textarea
            name={loginForm.message.inputName}
            defaultValue={value.message}
            onChange={e => onChangeForm(e)}
          ></textarea>
        </p>
        <p>
          <input type='radio' name='role' value='developer' onChange={e => onChangeForm(e)} />
          <input type='radio' name='role' value='marketer' onChange={e => onChangeForm(e)} />
        </p>
        <p>
          <input
            type='checkbox'
            name='privacy1'
            checked={value.privacy1 as never}
            onChange={e => onChangeForm(e)}
          />
        </p>
        <hr />
        {}
        <h3>
          Email:
          {value.email}
        </h3>
        <h3>
          Password:
          {value.password}
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
