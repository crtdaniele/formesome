import { formMemo, InputEvent } from 'formesome';
import React from 'react';
import { genericForm } from '../../form';

type Props = {
  value: string | number;
  setInput: (e: InputEvent) => void;
};

const EmailInput: React.FC<Props> = ({ value, setInput }) => {
  console.log('EmailInput');
  return (
    <p>
      <input
        type={genericForm.email.type}
        name={genericForm.email.inputName}
        defaultValue={value}
        onBlur={e => setInput(e)}
      />
    </p>
  );
};

const EmailInputWithMemo = formMemo(EmailInput);

export { EmailInputWithMemo };
