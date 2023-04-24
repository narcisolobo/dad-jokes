/* react router */
import { useNavigate } from 'react-router-dom';

/* react bootstrap */
import Button from 'react-bootstrap/Button';

function EditButton({ size, joke }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dad-jokes/${joke._id}/edit`);
  };

  return (
    <Button
      variant="light"
      size={size}
      className="text-dark me-2"
      onClick={handleClick}>
      Edit
    </Button>
  );
}

export default EditButton;
