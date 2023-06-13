import styles from './Socials.module.scss';
import { Link } from 'react-router-dom';

const Socials = () => {
  const {socials, socialLink} = styles;

  return (
    <>
      <ul className={socials}>
        <li><Link className={socialLink} to='/'><i className="icon-facebook"></i></Link></li>
        <li><Link className={socialLink} to='/'><i className="icon-linkedin"></i></Link></li>
        <li><Link className={socialLink} to='/'><i className="icon-twitter"></i></Link></li>
        <li><Link className={socialLink} to='/'><i className="icon-instagram"></i></Link></li>
      </ul>
    </>
  )
}

export default Socials