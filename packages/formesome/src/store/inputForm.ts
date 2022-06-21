import { atom } from 'recoil';

type State = {
  name: string;
  value: string | boolean;
};

/**
 * An atom to save momentanely the value of the input
 */
export const inputAtomFamily = atom<State>({
  key: 'input',
  default: {
    name: '',
    value: '',
  },
});
