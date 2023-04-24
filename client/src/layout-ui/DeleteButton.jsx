import Button from 'react-bootstrap/Button';

function DeleteButton({ size, setShow }) {
  const handleClick = () => {
    setShow(true);
  };

  return (
    <Button
      variant="light"
      size={size}
      className="text-dark"
      onClick={handleClick}>
      Delete
    </Button>
  );
}

export default DeleteButton;
