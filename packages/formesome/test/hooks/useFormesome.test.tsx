import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import React, { FC } from 'react';
import { useFormesome } from '../../src/hooks';
import { Status, Validations } from '../../src/types';

describe('useFormesome', () => {
  const WrappperContext = React.createContext('');

  const Wrapper: FC = ({ children }) => (
    <WrappperContext.Provider value=''>{children}</WrappperContext.Provider>
  );

  it('test the reset method', async () => {
    const loginForm = {
      email: {
        inputName: 'email',
        required: true,
        validation: Validations.Email,
        value: '',
        status: Status.TYPING,
      },
    };

    const { result } = renderHook(() => useFormesome('loginForm', loginForm), {
      wrapper: Wrapper,
    });

    const { getByTestId } = render(
      <input
        type='text'
        data-testid='email'
        name='email'
        defaultValue={result.current.formValue.email}
        onChange={e => result.current.onChangeForm(e)}
      />,
    );

    act(() => {
      const getInput = getByTestId('email');
      fireEvent.change(getInput, {
        target: { value: 'crtdaniele@gmail.com' },
      });
      result.current.reset();
    });

    expect(result.current.formValue.email).toEqual('');
  });
});