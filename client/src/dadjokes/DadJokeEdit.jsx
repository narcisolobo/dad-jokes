/* react */
import { useEffect, useState } from 'react';

/* react router */
import { useOutletContext, useParams } from 'react-router-dom';

/* local */
import DadJokeForm from './DadJokeForm';

function DadJokeEdit() {
  const { id } = useParams();
  const { getOneJoke, editOneJoke } = useOutletContext();
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    getOneJoke(id)
      .then((joke) => setJoke(joke))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    joke && (
      <DadJokeForm
        title="Edit Dad Joke"
        initialJoke={joke}
        submitFunc={editOneJoke}
      />
    )
  );
}

export default DadJokeEdit;
