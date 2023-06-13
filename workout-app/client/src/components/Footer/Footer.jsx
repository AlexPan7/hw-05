import styles from './Footer.module.scss';
import Logo from '../Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {footer, info, address, copy} = styles;

  return (
    <footer className={footer}>
      <Logo />
      <div className={info}>
        <address className={address}>150 52nd Street, Brooklyn NY 11232 </address>
        <p className={copy}>&copy; by WORKOUT in {currentYear}.</p>
      </div>
    </footer>
  )
}

export default Footer