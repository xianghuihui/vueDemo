import axios from 'axios';

let base = '/user'

export const Login = (params) => {
  return axios.post(base + '/login', params);
}
