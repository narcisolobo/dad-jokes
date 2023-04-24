/* react router */
import { Navigate, Route, Routes } from 'react-router-dom';

/* react bootstrap */
import Container from 'react-bootstrap/Container';

/* local */
import AccountBar from './layout-ui/AccountBar';
import AppBar from './layout-ui/AppBar';
import AuthProvider from './context/AuthContext';
import DadJokeDetails from './dadjokes/DadJokeDetails';
import DadJokeEdit from './dadjokes/DadJokeEdit';
import DadJokeList from './dadjokes/DadJokeList';
import DadJokeNew from './dadjokes/DadJokeNew';
import DadJokes from './dadjokes/DadJokes';

function App() {
  return (
    <AuthProvider>
      <AppBar />
      <AccountBar />
      <Container className="pb-3">
        <Routes>
          <Route path="/" element={<Navigate to="/dad-jokes" />} />
          <Route path="/dad-jokes" element={<DadJokes />}>
            <Route index element={<DadJokeList />} />
            <Route path="new" element={<DadJokeNew />} />
            <Route path=":id" element={<DadJokeDetails />} />
            <Route path=":id/edit" element={<DadJokeEdit />} />
          </Route>
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
