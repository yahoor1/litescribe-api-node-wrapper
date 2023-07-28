import axios from 'axios';
import { apiUri } from './config';

const instance = axios.create({
  baseURL: apiUri,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
