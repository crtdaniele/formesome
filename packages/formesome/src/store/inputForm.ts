import { atom } from 'recoil';
import { InputValue, Status } from '../types';

type State = {
  name: string;
  value: InputValue;
  status?: Status | undefined;
};

/**
 * An atom to save momentanely the value of the input
 */
export const inputAtomFamily = atom<State>({
  key: 'input',
  default: {
    name: '',
    value: '',
    status: undefined,
  },
});
