import styles from './Photos.module.scss';


const Photos = () => {
  const {list} = styles;

  return (
    <>
      <ul className={list}>
        <li><img src="./images/img-post-01.jpg" alt="" /></li>
        <li><img src="./images/img-post-02.jpg" alt="" /></li>
        <li><img src="./images/img-post-03.jpg" alt="" /></li>
        <li><img src="./images/img-post-04.jpg" alt="" /></li>
      </ul>
    </>
  )
}

export default Photos