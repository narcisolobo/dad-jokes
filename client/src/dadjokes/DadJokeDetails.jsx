/* react */
import { Fragment, useContext, useEffect, useState } from 'react';

/* react router */
import { useOutletContext, useParams } from 'react-router-dom';

/* react bootstrap */
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

/* local */
import { AuthContext } from '../context/AuthContext';
import EditDeleteButtons from '../layout-ui/EditDeleteButtons';
import LikeButton from '../layout-ui/LikeButton';
import DadJokeDeleteModal from './DadJokeDeleteModal';

function DadJokeDetails() {
  const { id } = useParams();
  const { getOneJoke } = useOutletContext();
  const [joke, setJoke] = useState(null);
  const [show, setShow] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);

  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    getOneJoke(id)
      .then((joke) => {
        setJoke(joke);
        setIsCurrent(true);
      })
      .catch((err) => console.log(err));
  }, [id, joke?.likes.length, isCurrent]);

  return (
    joke && (
      <Fragment>
        <Card bg="light" text="dark" className="shadow">
          <Card.Body>
            <Figure>
              <blockquote>
                <Card.Text>{joke.setup}</Card.Text>
                <Card.Text className="mb-0">{joke.punchline}</Card.Text>
              </blockquote>
              <Figure.Caption className="blockquote-footer">
                {joke.creator.username}
              </Figure.Caption>
            </Figure>
          </Card.Body>
          <Card.Footer className="bg-light text-muted text-end">
            {user && user.id === joke.creator._id ? (
              <EditDeleteButtons joke={joke} setShow={setShow} />
            ) : (
              <LikeButton size="md" joke={joke} setIsCurrent={setIsCurrent}>
                {joke.likes.length}
              </LikeButton>
            )}
          </Card.Footer>
        </Card>
        <DadJokeDeleteModal show={show} setShow={setShow} id={joke._id} />
      </Fragment>
    )
  );
}

export default DadJokeDetails;
