import { useFormesome } from 'formesome';
import { EmailInputWithMemo } from '../components';
import { genericForm } from '../form';

const GenericForm: React.FC = () => {
  const { setInput, value, isValidRequiredInputs, isValidAllInputs } = useFormesome(
    'genericForm',
    genericForm,
    true,
  );

  return (
    <form>
      <EmailInputWithMemo value={value.email} setInput={setInput} />
      <p>
        <input
          type={genericForm.password.type}
          name={genericForm.password.inputName}
          defaultValue={value.password}
          onChange={e => setInput(e)}
        />
      </p>
      <p>
        <textarea
          name={genericForm.message.inputName}
          defaultValue={value.message}
          onChange={e => setInput(e)}
        ></textarea>
      </p>
      <p>
        <input type='radio' name='role' value='developer' onChange={e => setInput(e)} />
        <input type='radio' name='role' value='marketer' onChange={e => setInput(e)} />
      </p>
      <p>
        <input
          type='checkbox'
          name='privacy1'
          checked={value.privacy1 as never}
          onChange={e => setInput(e)}
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
  );
};

export { GenericForm };
