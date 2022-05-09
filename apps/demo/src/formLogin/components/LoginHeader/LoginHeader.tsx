type Props = {
  isValidRequiredInputs: boolean;
  isValidAllInputs: boolean;
};

const LoginHeader: React.FC<Props> = ({
  isValidRequiredInputs,
  isValidAllInputs,
}) => {
  return (
    <section>
      <h3 className="font-bold text-2xl">Welcome to Formesome</h3>
      <p className="text-gray-600 pt-2">Try to play with the fields!</p>
      <p>
        <strong>Is valid all required inputs?</strong>{' '}
        {isValidRequiredInputs ? 'YES' : 'NO'}
      </p>
      <p>
        <strong>Is valid all inputs?</strong> {isValidAllInputs ? 'YES' : 'NO'}
      </p>
    </section>
  );
};

export { LoginHeader };
