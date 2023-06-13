import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../context/auth'
import { FaRegHeart } from 'react-icons/fa';
import Button, { SmallButton } from '../Button/Button';
import styles from './Comments.module.scss';

const BASE_URL = "http://localhost:5000/posts/";

function Comments({postId}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const {user} = useContext(AuthContext)
  console.log(`${BASE_URL}${postId}/viewcount`);
  
  const fetchComments = async () => {
    try {
      const res = await axios.get(`${BASE_URL}${postId}/comments`)
      setComments(res.data)
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    postId !== undefined && fetchComments();
  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}${postId}/comments`, {
          text: newComment,
          userId: user.id,
        },
        {
          headers: {"Content-Type": "application/json"}
        }
      )
      setComments(res.data.comments)
      setNewComment('')
    } catch(error) {
      console.error(error);
    }
  }

  const handleReply = async (id, text) => {
    try {
      const {data} = await axios.patch(`${BASE_URL}${postId}/comments/${id}/reply`, 
        {
          text
        }
      )
      setComments(data.comments)
    } catch(error) {
      console.error(error);
    }
  }

  const [showReplyForm, setShowReplyForm] = useState(false);
  const toggleReplyForm = () => {
    setShowReplyForm((prevState) => !prevState);
  };

  const handleLike= async id => {
    try {
      const {data} = await axios.patch(`${BASE_URL}${postId}/comments/${id}/like`)
      setComments(data.comments)
    } catch(error) {
      console.error(error);
    }
  }

  const {commentsBlock, replysBlock, replysComments} = styles

  return (
    <div className={commentsBlock}>
      <h2>Comments</h2>
      <ul>
        {
          comments && comments.map(({_id, text, likes, replies}) => (
            <li key={_id}>
              <p>{text}</p>
              <p><u>Likes: {likes}</u> <FaRegHeart onClick={() => {handleLike(_id)}} /></p>
              <div className={replysBlock}>
                <SmallButton onClick={toggleReplyForm}>Reply</SmallButton>
                {showReplyForm && (
                  <form onSubmit={(e)=> {
                    e.preventDefault();
                    handleReply(_id, e.target.reply.value)
                  }}>
                    <textarea name="reply" placeholder='Live your message'></textarea>
                    <SmallButton type="submit">Post Reply</SmallButton>
                  </form>
                )}
                {
                  replies.length > 0 && (
                    <div className={replysComments}>
                      <strong>Reply Comments:</strong>
                      <ul>
                        {
                          replies && replies.map((reply) => (
                          <li key={reply._id}>
                            {reply}
                          </li> 
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <h3>Leave a comment</h3>
        <textarea value={newComment} onChange={e=> setNewComment(e.target.value)} placeholder='Comment text'></textarea>
        <Button type="submit">Submit Comment</Button>
      </form>
    </div>
  )
}

export default Comments