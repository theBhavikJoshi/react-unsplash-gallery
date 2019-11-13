import axios from 'axios';
const KEY = '5d5ec7ccd9a641fd7b25873bcb8513b232eb634e6c2d38f77ac93dc57f3ceef6';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Accept-Version': 'v1',
    'Authorization': `Client-ID ${KEY}`
  }
});