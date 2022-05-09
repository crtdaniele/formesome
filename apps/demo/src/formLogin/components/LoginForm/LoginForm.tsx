import { Form } from 'formesome';
import { useCallback } from 'react';

type Props = {
  form: Form;
  onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<Props> = ({ form, onChangeForm }) => {
  const goToRepository = useCallback(() => {
    window.open('https://www.npmjs.com/package/formesome', '_blank');
  }, []);

  const onSubmit = useCallback(() => {
    alert(JSON.stringify(form));
  }, [form]);

  return (
    <section className="mt-10">
      <form className="flex flex-col">
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
            Email*
          </label>
          <input
            className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
            type="text"
            name="email"
            defaultValue={form?.email?.value}
            onBlur={(e) => onChangeForm(e)}
          />
        </div>
        <div className="mb-6 pt-3 rounded bg-gray-200">
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
            Password
          </label>
          <input
            className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
            type="text"
            name="password"
            defaultValue={form?.password?.value}
            onChange={(e) => onChangeForm(e)}
          />
        </div>
        <div className="flex justify-end">
          <a
            onClick={goToRepository}
            className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6 cursor-pointer"
          >
            Do you want to see the repo?
          </a>
        </div>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          onClick={onSubmit}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export { LoginForm };