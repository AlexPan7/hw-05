import styles from './SectionMoreLink.module.scss';

const SectionMoreLink = ({children}) => {
  const {link} = styles;
  
  return <a className={link} href="#">{children}</a>
}

export default SectionMoreLink