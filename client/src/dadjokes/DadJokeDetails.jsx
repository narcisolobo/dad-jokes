import Card from 'react-bootstrap/Card';

function DadJokeDetails({ joke }) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Text>
          <strong>Setup: </strong>
          {joke.setup}
        </Card.Text>
        <Card.Text>
          <strong>Punchline: </strong>
          {joke.punchline}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DadJokeDetails;
