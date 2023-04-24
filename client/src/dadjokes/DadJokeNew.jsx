/* react */
import { useContext } from 'react';

/* react router */
import { useOutletContext } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';
import DadJokeForm from './DadJokeForm';

function DadJokeNew() {
  const {
    state: { user },
  } = useContext(AuthContext);

  const { addJoke } = useOutletContext();
  const initialJoke = {
    setup: '',
    punchline: '',
    creator: user?.id,
  };

  return (
    <DadJokeForm
      title="Add Dad Joke"
      initialJoke={initialJoke}
      submitFunc={addJoke}
    />
  );
}

export default DadJokeNew;
