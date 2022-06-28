import { formMemo, InputEvent } from 'formesome';
import React from 'react';
import { genericForm } from '../../form';

type Props = {
  value: string | number;
  // eslint-disable-next-line no-unused-vars
  setInput: (e: InputEvent) => void;
};

const EmailInput: React.FC<Props> = ({ value, setInput }) => (
  <p>
    <input
      type={genericForm.email.type}
      name={genericForm.email.inputName}
      defaultValue={value}
      onBlur={(e) => setInput(e)}
    />
  </p>
);

const EmailInputWithMemo = formMemo(EmailInput);

export { EmailInputWithMemo };
