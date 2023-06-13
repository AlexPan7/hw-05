import styles from './SectionItem.module.scss';

const SectionItem = ({ children }) => {
  const {section} = styles;

  return <section className={section}>{ children }</section>
}

export default SectionItem