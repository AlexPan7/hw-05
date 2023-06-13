import { useState } from 'react'
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const {form, formItem, formField, formSubmit} = styles;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevVal) => ({ ...prevVal, [name]:value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <>
     <form className={form} onSubmit={handleSubmit}>
        <div className={formItem}>
          <input className={formField} type="text" name="name" placeholder="Name..." value={contactData.name} onChange={handleChange} />
        </div>
        <div className={formItem}>
          <input className={formField} type="email" name="email" placeholder="Email..." value={contactData.email} onChange={handleChange} />
        </div>
        <div className={formItem}>
          <textarea className={formField} name="message" cols="30" rows="3" placeholder="Message..." value={contactData.message} onChange={handleChange} >
          </textarea>
        </div>
        <button className={formSubmit} type='submit'>Send</button>
      </form>
    </>
  )
}

export default ContactForm