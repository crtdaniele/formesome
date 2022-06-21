import React from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactElement;
};

/**
 * FormesomeProvider is a provider to wrap your application to use the library formesome
 * @param children an element in jsx or tsx
 * @returns A provider with your children
 */
const FormesomeProvider: React.FC<Props> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export { FormesomeProvider };
