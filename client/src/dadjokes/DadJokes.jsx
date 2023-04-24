/* react */
import { useContext } from 'react';

/* axios */
import axios from 'axios';

/* react router */
import { Outlet } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';

function DadJokes() {
  const baseURL = 'http://localhost:5001/api/';

  // construct axios config object
  const {
    state: { user },
  } = useContext(AuthContext);
  let authConfig = {};
  if (user) {
    authConfig.headers = {
      Authorization: `Bearer ${user.token}`,
    };
  }

  const http = axios.create({ baseURL });

  const addJoke = async (joke) => {
    try {
      const response = await http.post('dad-jokes', joke, authConfig);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getAllJokes = async () => {
    try {
      const response = await http.get('dad-jokes');
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const editOneJoke = async (joke) => {
    try {
      const response = await http.put(`dad-jokes/${joke._id}`, joke);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const getOneJoke = async (id) => {
    try {
      const response = await http.get(`dad-jokes/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const deleteOneJoke = async (id) => {
    try {
      const response = await http.delete(`dad-jokes/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const likeJoke = async (jokeId, userId) => {
    try {
      const response = await http.post('dad-jokes/like', { jokeId, userId });
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const api = {
    addJoke,
    getAllJokes,
    getOneJoke,
    editOneJoke,
    deleteOneJoke,
    likeJoke,
  };

  return (
    <div>
      <Outlet context={api} />
    </div>
  );
}

export default DadJokes;
