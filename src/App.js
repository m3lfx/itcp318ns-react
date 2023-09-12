import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Nav from './Nav';
import Create from './Create';
import axios from 'axios'

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
      {posts.map((post, i) => (
        <div class="container">
        <div class="row">
          <div class="col-sm">
            One of three columns
          </div>
          <div class="col-sm">
          {post.title}
          </div>
          <div class="col-sm">
          {post.slug}
          </div>
          <div class="col-sm">
          {post.content}
          </div>
        </div>
      </div>
      ))}

      <Footer />
    </div>
  );
}

export default App;
