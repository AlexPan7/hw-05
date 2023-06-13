import { useContext, useState } from 'react'
import axios from 'axios';
import styles from './LoginForm.module.scss';

import { AuthContext } from '../../context/auth';

const BASE_URL = "http://localhost:5000/user/login";

const LoginForm = () => {
  const {form, formItem, formField, formSubmit} = styles;
  
  const { login } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((presterData) => ({ ...presterData, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userData;

    try {
      const response = await axios.post(BASE_URL, {
        email,
        password,
      });

      const result = response.data;
      result && login(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className={form} onSubmit={handleSubmit}>
        <div className={formItem}>
          <input className={formField} type="email" name="email" placeholder="Email..." value={userData.email} onChange={handleChange} />
        </div>
        <div className={formItem}>
          <input className={formField} type="password" name="password" placeholder="password..." value={userData.password} onChange={handleChange} />
        </div>
        <button className={formSubmit} type='submit'>Send</button>
      </form>
    </>
  );
};

export default LoginForm