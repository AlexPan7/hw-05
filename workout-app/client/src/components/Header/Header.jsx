import { useContext, useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo';
import BurgerButton from '../BurgerButton';
import { NavList, NavItem } from '../Nav';
import { useTheme } from '../../context/ThemeContext';
import { AuthContext } from '../../context/auth';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const {header, toggleThemeBtn, userBar, divider, logoutBtn} = styles;
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header className={header}>
      <Logo />
      <BurgerButton onClick={toggleNav} isOpen={isOpen}/>
      <NavList isOpen={isOpen}>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <NavItem link="/blog">Blog</NavItem>
        <div className={userBar}>
          {user ? (
              <>
                <button onClick={()=> logout()} className={logoutBtn}>Logout</button>
                <span className={divider}>/</span>
                <NavItem link="/dashboard">Dashboard</NavItem>
              </>
            ) : (
              <>
                <NavItem link="/login">Login</NavItem>
                <span className={divider}>/</span>
                <NavItem link="/registration">Registration</NavItem>
              </>
          )}
        </div>
        <button className={toggleThemeBtn} onClick={handleClick}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </NavList>
    </header>
  )
}

export default Header