import { callLoginReg } from '../service/userService';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

function useLogin() {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (path, formData) => {
    setIsLoading(true);

    try {
      setErrors(null);
      const user = await callLoginReg(path, formData);
      localStorage.setItem('user', JSON.stringify);
    } catch (err) {}
  };
}

export default useLogin;
