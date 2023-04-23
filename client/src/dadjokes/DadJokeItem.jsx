import Card from 'react-bootstrap/Card';

function DadJokeItem({ joke }) {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Text>{joke.setup}</Card.Text>
        <Card.Text>{joke.punchline}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DadJokeItem;
