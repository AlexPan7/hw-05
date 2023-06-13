import styles from './PostItem.module.scss';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
  const {postItem, postImage, postDescr, descr, postTitle} = styles;

  const {_id, thumbnail, title, body} = post;

  return (
    <li className={postItem}>
      <Link to={`/posts/${_id}`}>
        <div className={postImage}>
          <img src={thumbnail} alt="image description" />
        </div>
        <div className={postDescr}>
          <h3 className={postTitle}>{title}</h3>
          <div className={descr} dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
      </Link>
    </li>
  )
}

export default PostItem