import { useState } from 'react';

import styles from './CTA.module.scss';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import LoginForm from '../LoginForm/LoginForm';

const CTA = () => {
  const {cta, title} = styles;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={cta}>
        <h3 className={title}>Try us in one click</h3>
        <Button  onClick={handleClick}>Free Lesson</Button>
      </div>

      <Popup isOpen={isOpen} onClose={handleClose}>
        <LoginForm />
      </Popup>
    </>
  )
}

export default CTA