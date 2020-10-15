import React, { useState, useEffect } from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import axios from './axios';
import Thread from './Thread';

import { useStateValue } from './StateProvider';
const Home = () => {
  const [{ query }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://www.reddit.com/search.json?q=${query}`
      );
      setPosts(request.data.data.children);
      return request;
    }
    fetchData();
  }, [query]);

  return (
    <div className='home'>
      <div className='home__title'>Popular Posts</div>
      <div className='home__container'>
        <div className='home__main'>
          {posts &&
            posts.map((post) => <Thread post={post.data} key={post.data.id} />)}
        </div>
        <div className='home__sideBar'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
