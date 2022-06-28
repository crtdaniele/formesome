import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { render, fireEvent, renderHook, act } from '@testing-library/react';
import { useFormesome } from '../../src/hooks';
import { Status, TypeInput, Validations } from '../../src/types';

type Props = {
  children: React.ReactElement;
};

describe('useFormesome', () => {
  const Wrapper: FC<Props> = ({ children }) => <RecoilRoot>{children}</RecoilRoot>;

  it('test the reset method', async () => {
    const loginForm = {
      email: {
        type: TypeInput.EMAIL,
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
        type="text"
        data-testid="email"
        name="email"
        defaultValue={result.current.value.email}
        onChange={(e) => result.current.setInput(e)}
      />,
    );

    act(() => {
      const getInput = getByTestId('email');
      fireEvent.change(getInput, {
        target: { value: 'crtdaniele@gmail.com' },
      });
      result.current.reset();
    });

    expect(result.current.value.email).toEqual('');
  });
});
