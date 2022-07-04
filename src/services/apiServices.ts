import axios from 'axios';
import { config } from '../constants';
import * as methods from './api';

const init = () => {
    axios.defaults.baseURL = config.baseUrl;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  };
  

  export default {
    ...methods,
    init,
  }