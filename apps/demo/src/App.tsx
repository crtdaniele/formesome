import { useFormesome, Form, Status, Validations, OptionsRequired } from 'formesome';

type FormInput = {email: OptionsRequired} & {password: OptionsRequired}

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
  const {
    onChangeForm,
    form,
    formValue,
    formValueRequired,
    isValidRequiredInputs,
    isValidAllInputs,
  } = useFormesome('loginForm', loginForm);

  console.log(form);
  console.log(formValue);
  console.log(formValueRequired);

  form.email.value = 'prova'

  return (
    <div>
      <form>
        <p>
          <input
            type="text"
            name="email"
            defaultValue={form?.email?.value}
            onBlur={(e) => onChangeForm(e)}
          />
          {form?.email?.status === Status.ERROR && <>Errore</>}
        </p>
        <p>
          <input
            type="text"
            name="password"
            defaultValue={form?.password?.value}
            onChange={(e) => onChangeForm(e)}
          />
          {form.password.status === Status.ERROR && <>Errore</>}
        </p>
        <hr />
        {}
        <h3>
          Email:
          {form.email.value}
        </h3>
        <h3>
          Password:
          {form.password.value}
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
