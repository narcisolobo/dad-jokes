/* react router */
import { Navigate, Route, Routes } from 'react-router-dom';

/* react bootstrap */
import Container from 'react-bootstrap/Container';

/* local */
import AccountBar from './layout/AccountBar';
import AppBar from './layout/AppBar';
import AuthProvider from './context/AuthContext';
import DadJokeList from './dadjokes/DadJokeList';
import DadJokeNew from './dadjokes/DadJokeNew';
import DadJokes from './dadjokes/DadJokes';

function App() {
  return (
    <AuthProvider>
      <AppBar />
      <AccountBar />
      <Container>
        <Routes>
          <Route path="/" element={<Navigate to="/dad-jokes" />} />
          <Route path="/dad-jokes" element={<DadJokes />}>
            <Route index element={<DadJokeList />} />
            <Route path="new" element={<DadJokeNew />} />
          </Route>
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
