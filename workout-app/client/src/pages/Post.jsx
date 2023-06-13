import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { PostDetail } from '../components/Post';
import Comments from '../components/Comments/Comments';

import axios from 'axios';

const BASE_URL = "http://localhost:5000/posts/";

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  const [viewCount, setViewCount] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(BASE_URL+id);
      setPost(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchViewCount = async () => {
    try {
      const res = await axios.patch(`${BASE_URL}${id}/viewcount`)
      setViewCount(res.data.views);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchViewCount();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Link onClick={goBack}>Go back</Link>
      <br />
      View: {JSON.stringify(viewCount)}
      {post && <PostDetail post={post} />}
      <Comments postId={id} />
    </>
  );
};
