import styles from './RegistrationForm.module.scss';
import {useState, useContext} from 'react'
import axios from 'axios';

import { AuthContext } from "../../context/auth"

const BASE_URL = "http://localhost:5000/user/registration";

const RegistrationForm = () => {
  const {form, formItem, formField, formSubmit} = styles;

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  
  const handleChange= (e) => {
    const { name, value} = e.target;
    setFormData((prevFormData)=> ({ ...prevFormData, [name]: value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(BASE_URL, formData);
      const result = response.data;
      result && login( result );
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={form}>
      <div className={formItem}>
        <input type="email" name="email" className={formField} placeholder='email' value={FormData.email} onChange={handleChange} />
      </div>
      <div className={formItem}>
        <input type="password" name="password" className={formField} placeholder='password' value={FormData.password} onChange={handleChange} />
      </div>
      <div className={formItem}>
        <input type="password" name="confirmPassword" className={formField} placeholder='confirm password' value={FormData.confirmPassword} onChange={handleChange} />
      </div>
      <div className={formItem}>
        <input type="text" name="firstName" className={formField} placeholder='first Name' value={FormData.firstName} onChange={handleChange} />
      </div>
      <div className={formItem}>
        <input type="text" name="lastName" className={formField} placeholder='last Name' value={FormData.lastName} onChange={handleChange} />
      </div>
      <button type="submit" className={formSubmit}>Submit</button>
    </form>
  )
};

export default RegistrationForm