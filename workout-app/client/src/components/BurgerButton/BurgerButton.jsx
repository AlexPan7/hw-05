import styles from './BurgerButton.module.scss';

const BurgerButton = ({isOpen, onClick}) => {
  const {burgerBtn} = styles;

  return (
    <button onClick={onClick} className={`${burgerBtn} ${isOpen ? styles.opened : ''}`}>
      <span>menu</span>
    </button>
  )
}

export default BurgerButton