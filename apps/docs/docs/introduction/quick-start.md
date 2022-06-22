---
sidebar_position: 3
---

# Quick start

The following code excerpt demonstrates a basic usage of a form managed by Formesome:

## Config file

This is the file that you create to configure your form logic:

```tsx title="src/login/form/login.form.ts"
import { Form, OptionsRequired, Status, TypeInput, Validations } from 'formesome';

type FormInput = {
  email: OptionsRequired;
  password: OptionsRequired;
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
};
```

## Login Form Component

In this component you define the UX of the form and you use the logic of the configuration file with the hook useFormesome:

```tsx title="src/login/view/Login.tsx"
import { useFormesome } from 'formesome';
import { loginForm } from '../form';

const LoginForm: React.FC = () => {
  const { value, setInput, isValidRequiredInputs } = useFormesome('loginForm', loginForm);

  return (
    <form>
      <div>
        <label for={loginForm.email.inputName}>Email</label>
        <input
          type={loginForm.email.type}
          name={loginForm.email.inputName}
          onChange={e => setInput(e)}
        />
      </div>
      <div>
        <label for={loginForm.password.inputName}>Password</label>
        <input
          type={genericForm.password.type}
          name={genericForm.password.inputName}
          onChange={e => setInput(e)}
        />
      </div>
    </form>
  );
};

export default { LoginForm };
```
