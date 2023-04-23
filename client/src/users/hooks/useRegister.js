import { callLoginReg } from '../service/userService';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

function useRegister() {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const register = async (path, formData) => {
    setIsLoading(true);
    try {
      setErrors(null);
      const user = await callLoginReg(path, formData);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN', payload: user });
      setIsLoading(false);
    } catch (err) {
      setErrors(err?.response?.data?.errors);
      setIsLoading(false);
      throw err;
    }
  };

  return { register, errors, isLoading };
}

export default useRegister;
