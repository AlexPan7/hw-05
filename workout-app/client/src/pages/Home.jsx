import { useState, useEffect } from "react";

import axios from 'axios';

import Hero from "../components/Hero"
import {PostList, PostItem} from "../components/Post"
import {SectionItem, SectionHeading, SectionTitle, SectionMoreLink} from "../components/Section"
import CTA from "../components/CTA";
import CallButton from "../components/CallButton/CallButton";

const BASE_URL = "http://localhost:5000/posts/";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(BASE_URL);

      setPosts(res.data.data.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Hero />
      <SectionItem>
        <SectionHeading>
          <SectionTitle>Popular Exercises</SectionTitle>
          <SectionMoreLink>SEE MORE EXERCISES</SectionMoreLink>
        </SectionHeading>
        <PostList>
          {posts && posts.map((post, id) => 
            <PostItem key={id} post={post} />
          )}
        </PostList>
      </SectionItem>
      <CTA />
      <CallButton />
    </>
  )
}
