/* react router */
import { useNavigate, useOutletContext } from 'react-router-dom';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/* local */
import { AuthContext } from '../context/AuthContext';

function DadJokeDeleteModal({ show, setShow, id }) {
  const navigate = useNavigate();
  const { deleteOneJoke } = useOutletContext(AuthContext);

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = () => {
    deleteOneJoke(id)
      .then((joke) => {
        console.log(joke);
        navigate('/dad-jokes');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this joke?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" size="sm" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" type="submit" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DadJokeDeleteModal;
