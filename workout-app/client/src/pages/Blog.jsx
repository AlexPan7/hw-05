import { useState, useEffect } from "react";

import axios from 'axios';

import {PostList, PostItem} from "../components/Post"
import {SectionItem, SectionHeading, SectionTitle} from "../components/Section"

const BASE_URL = "http://localhost:5000/posts/";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Our Blog</SectionTitle>
        </SectionHeading>
        <PostList>
          {posts.data && posts.data.map((post, _id) => (
            <PostItem key={_id} post={post}/>
          ))}
        </PostList>
      </SectionItem>
    </>
  )
}
