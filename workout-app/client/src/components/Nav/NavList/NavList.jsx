import styles from './NavList.module.scss';

const NavList = ({ isOpen, children }) => {
  const {navList, navOpened} = styles;

  return (
    <nav className={`${navList} ${isOpen && navOpened}`}>
      { children }
    </nav>
  )
}

export default NavList