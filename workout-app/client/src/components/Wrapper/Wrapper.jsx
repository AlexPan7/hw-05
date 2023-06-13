import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => {
  const {wrapper} = styles;

  return <>
      <div className={wrapper}>{ children }</div>
  </>
}

export default Wrapper