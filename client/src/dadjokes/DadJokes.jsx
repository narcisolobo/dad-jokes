import axios from 'axios';
import { Outlet } from 'react-router-dom';

const baseURL = 'http://localhost:5001/api/';

function DadJokes() {
  const http = axios.create({ baseURL });

  const addJoke = (joke) => {};

  const getAllJokes = async () => {
    try {
      const response = await http.get('dad-jokes');
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getOneJoke = (id) => {};
  const editOneJoke = (id, joke) => {};
  const deleteOneJoke = (id) => {};

  const api = {
    addJoke,
    getAllJokes,
    getOneJoke,
    editOneJoke,
    deleteOneJoke,
  };

  return (
    <div>
      <Outlet context={api} />
    </div>
  );
}

export default DadJokes;
