import styles from './PostDetail.module.scss';

const PostDetail = ({post}) => {
  const {productDetail, productimages, descr} = styles
  const {thumbnail, title, body} = post;
  
  return (
    <>
      <div className={productDetail}>
        <div className={productimages}>
          <img src={thumbnail} alt="" />
        </div>
        <h1>{title}</h1>
        <div className={descr} dangerouslySetInnerHTML={{ __html: body }}></div>
      </div>
    </>
  )
}

export default PostDetail