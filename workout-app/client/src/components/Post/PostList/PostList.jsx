import styles from './PostList.module.scss';

const PostList = ({ children }) => {
  const {postList} = styles;

  return <ul className={postList}>{ children }</ul>
}

export default PostList