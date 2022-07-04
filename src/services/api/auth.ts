
import axios from 'axios';

async function getForm  (): Promise<any> {
      try {
        return await axios.get('/api/form')
      } catch(e) {
          return Promise.reject(e)
      }   
}

async function postForm  (param: Record<string, string>): Promise<any> {
  try {
    return await axios.post('/api/form', param)
  } catch(e) {
      return Promise.reject(e)
  }   
}





export default {
    getForm,
    postForm
}