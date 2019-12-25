import axios from 'axios';

let base = '/user'

export const Register = (params) => {
  return axios.post(base + '/register', params);
}
