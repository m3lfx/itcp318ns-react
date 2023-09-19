import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import Create from './Create';
import axios from 'axios'
import Title from './Title';
import { Card } from '@mui/material';
import { PostList } from './PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios
      .get(`http://localhost:4000/api/posts`)
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => alert('Error fetching posts'));
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container pb-5">
      <Nav />
      <Title title="welcome to my blog" />
      {posts.map((post, i) => (
        <PostList post={post} key={post.id} />

      ))}

      <Footer />
    </div>
  );
}

export default App;
