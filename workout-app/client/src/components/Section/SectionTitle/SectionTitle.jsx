import styles from './SectionTitle.module.scss';

const SectionTitle = ({children}) => {
  const {title} = styles;
  
  return <h2 className={title}>{children}</h2>
}

export default SectionTitle