import { Fragment, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import DadJokeItem from './DadJokeItem';

import styles from '../css/dadjoke-list.module.css';

function DadJokeList() {
  const { getAllJokes } = useOutletContext();
  const [jokes, setJokes] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    getAllJokes()
      .then((jokes) => {
        setJokes(jokes);
        setIsCurrent(true);
      })
      .catch((err) => console.error(err));
  }, [isCurrent]);

  return (
    <Fragment>
      <h1 className="mb-3">All Dad Jokes</h1>
      {isCurrent && (
        <div className={styles.grid}>
          {jokes.map((joke) => (
            <DadJokeItem key={joke._id} joke={joke} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default DadJokeList;
