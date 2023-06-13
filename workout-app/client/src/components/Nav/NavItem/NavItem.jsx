import styles from './NavItem.module.scss';

import { NavLink } from 'react-router-dom';

const NavItem = ({link, children}) => {
  const {navLink, navLinkActive} = styles;

  const activePage = ({ isActive }) => isActive ? `${navLink} ${navLinkActive}` : navLink;

  return <NavLink to={link} className={activePage}>{children}</NavLink>
}

export default NavItem