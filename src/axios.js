import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.reddit.com/search.json',
});

export default instance;
