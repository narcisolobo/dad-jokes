/* react */
import { useContext } from 'react';

/* react bootstrap */
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

/* react router */
import { Link } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';
import LikeButton from '../layout-ui/LikeButton';

function DadJokeItem({ joke, setIsCurrent }) {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
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
      <Card.Footer className="d-flex justify-content-between align-items-center gap-2 bg-light">
        <small>
          <Link to={`/dad-jokes/${joke._id}`} className="link-primary">
            View
          </Link>
        </small>
        {user && user.id !== joke.creator._id && (
          <LikeButton size="sm" joke={joke} setIsCurrent={setIsCurrent}>
            {joke.likes.length}
          </LikeButton>
        )}
      </Card.Footer>
    </Card>
  );
}

export default DadJokeItem;
