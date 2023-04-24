/* react */
import { useContext, useEffect, useState } from 'react';

/* react router */
import { useNavigate } from 'react-router-dom';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

/* local */
import { AuthContext } from '../context/AuthContext';

function DadJokeForm({ title, initialJoke, submitFunc }) {
  const navigate = useNavigate();
  const { state } = useContext(AuthContext);
  const [formState, setFormState] = useState(initialJoke);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!state.user) {
      navigate('/dad-jokes');
    }
  }, [state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    navigate('/dad-jokes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunc(formState)
      .then((joke) => {
        console.log(joke);
        setErrors(null);
        navigate('/dad-jokes');
      })
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <Card className="shadow">
      <Card.Header as="h3">{title}</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="setup">
            <Form.Label>Setup:</Form.Label>
            <Form.Control
              as="textarea"
              value={formState.setup}
              onChange={handleChange}
            />
            {errors?.setup && (
              <Form.Text className="text-warning">
                {errors.setup.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="punchline">
            <Form.Label>Punchline:</Form.Label>
            <Form.Control
              as="textarea"
              value={formState.punchline}
              onChange={handleChange}
            />
            {errors?.punchline && (
              <Form.Text className="text-warning">
                {errors.punchline.message}
              </Form.Text>
            )}
          </Form.Group>
          <div className="text-end">
            <Button variant="outline-primary me-3" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">{title}</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default DadJokeForm;
