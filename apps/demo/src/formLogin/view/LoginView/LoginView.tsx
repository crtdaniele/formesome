import { useFormesome } from 'formesome';
import { loginForm } from '../../form/login.form';
import { LoginForm, LoginHeader } from '../../components';
import { LoginTitle } from '../../components/LoginTitle';

const LoginView: React.FC = () => {
  const {
    onChangeForm,
    form,
    formRequiredValue,
    isValidRequiredInputs,
    isValidAllInputs,
  } = useFormesome('loginForm', loginForm);

  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <LoginTitle />

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section className="mt-10">
          <LoginHeader
            isValidRequiredInputs={isValidRequiredInputs}
            isValidAllInputs={isValidAllInputs}
          />
          <LoginForm form={form} onChangeForm={onChangeForm} />
        </section>
      </main>
    </div>
  );
};

export { LoginView };
