import { useSelector } from 'react-redux';

const Greeting = () => {
  const state = useSelector((state) => state.greetings);

  return (
    <h1>{ state.greeting }</h1>
  );
};

export default Greeting;
