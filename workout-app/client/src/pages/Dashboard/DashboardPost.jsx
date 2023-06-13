import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dashboard.module.scss";
import {SmallButton} from '../../components/Button/Button';

const BASE_URL = "http://localhost:5000/posts/";

export const DashboardPost = () => {
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editedPost, setEditedPost] = useState({});

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

  const handleEdit = async (postId) => {
    setEditPostId(postId);

    try {
      await axios.patch(`${BASE_URL}${postId}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, postId) => {
    const { name, value } = e.target;
    setEditedPost((prevEditedPost) => ({
      ...prevEditedPost,
      [postId]: {
        ...prevEditedPost[postId],
        [name]: value,
      },
    }));
  };

  const handleSave = async (postId) => {
    // Access the edited post data from editedPost state
    const updatedPostData = editedPost[postId];

    try {
      // Make the PATCH request to update the post
      await axios.patch(`${BASE_URL}${postId}`, updatedPostData);
      fetchPosts();
      setEditPostId(null); // Reset the edit state
      setEditedPost((prevEditedPost) => ({
        ...prevEditedPost,
        [postId]: {}, // Clear the edited post data
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}${postId}`);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Text</th>
          <th>Tags</th>
          <th>Categories</th>
          <th>ImageUrl</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.data.map(({ _id, title, body, tag, categories, thumbnail }) => {
          const isEditing = editPostId === _id;
          const editedData = editedPost[_id] || {}; // Access the edited post data for this post ID

          return (
            <tr key={_id}>
              <td>{_id}</td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="title"
                    value={editedData.title || title}
                    onChange={(e) => handleInputChange(e, _id)}
                  />
                ) : (
                  title
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    name="body" // Corrected the name attribute here
                    value={editedData.body || body}
                    onChange={(e) => handleInputChange(e, _id)}
                  />
                ) : (
                  body
                )}
              </td>
              <td>{tag}</td>
              <td>{categories}</td>
              <td>{thumbnail}</td>
              <td>
                {isEditing ? (
                  <SmallButton onClick={() => handleSave(_id)}>Save</SmallButton>
                ) : (
                  <SmallButton onClick={() => handleEdit(_id)}>Edit</SmallButton>
                )}
                <SmallButton onClick={() => handleDelete(_id)}>Delete</SmallButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
