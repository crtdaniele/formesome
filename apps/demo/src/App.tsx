import React from 'react';
import { FormesomeProvider } from 'formesome';
import { GenericForm } from './genericForm/view';

const App: React.FC = () => (
  <FormesomeProvider>
    <GenericForm />
  </FormesomeProvider>
);

export default App;
