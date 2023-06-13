import styles from './SectionHeading.module.scss';

const SectionHeading = ({children}) => {
  const {heading} = styles;

  return <header className={heading}>{children}</header>
}

export default SectionHeading