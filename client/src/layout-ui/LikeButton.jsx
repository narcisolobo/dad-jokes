/* react */
import { useContext } from 'react';

/* react router */
import { useOutletContext } from 'react-router-dom';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

/* local */
import { AuthContext } from '../context/AuthContext';

function LikeButton({ children, size, joke, setIsCurrent }) {
  const { likeJoke } = useOutletContext();
  const {
    state: { user },
  } = useContext(AuthContext);

  const handleLike = () => {
    likeJoke(joke._id, user.id)
      .then((jokeAndUser) => {
        console.log(jokeAndUser);
        setIsCurrent(false);
      })
      .catch((err) => console.log(err));
  };

  console.log(joke.likes);

  return (
    <OverlayTrigger overlay={<Tooltip>Roll your eyes at this joke.</Tooltip>}>
      <Button
        variant="light"
        size={size}
        className="text-dark"
        onClick={handleLike}
        disabled={joke.likes.includes(user.id)}>
        <i className="fa-regular fa-face-rolling-eyes me-2"></i>
        {children}
      </Button>
    </OverlayTrigger>
  );
}

export default LikeButton;
