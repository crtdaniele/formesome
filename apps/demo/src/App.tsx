import { FormesomeProvider } from 'formesome';
import { GenericForm } from './genericForm/view';

const App: React.FC = () => {
  return (
    <FormesomeProvider>
      <GenericForm />
    </FormesomeProvider>
  );
};

export default App;
