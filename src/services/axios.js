import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://44.219.200.153:8080',
});

export default instance;