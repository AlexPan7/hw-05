import styles from './Logo.module.scss';

import { NavLink } from 'react-router-dom';

const Logo = () => {
  const {logo} = styles;
  
  return <NavLink to="/" className={logo}>WORKOUT</NavLink>
}

export default Logo