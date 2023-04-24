/* React */
import { Fragment, useContext, useEffect, useState } from 'react';

/* react-router */
import { useOutletContext } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';
import DadJokeItem from './DadJokeItem';
import styles from '../css/dadjoke-list.module.css';

function DadJokeList() {
  const { getAllJokes } = useOutletContext();
  const [jokes, setJokes] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    getAllJokes()
      .then((jokes) => {
        setJokes(jokes);
        setIsCurrent(true);
      })
      .catch((err) => console.log(err));
  }, [isCurrent]);

  let subtitle = 'Login or register to roll your eyes at these horrible jokes.';

  if (user) {
    subtitle = 'Click the button to roll your eyes at a joke!';
  }

  return (
    <Fragment>
      <h1>All Dad Jokes</h1>
      <h5 className="mb-4">{subtitle}</h5>
      {isCurrent && (
        <div className={styles.grid}>
          {jokes.map((joke) => (
            <DadJokeItem
              key={joke._id}
              joke={joke}
              setIsCurrent={setIsCurrent}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default DadJokeList;
