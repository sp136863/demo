import axios from 'axios'


export function request(config){
const fun = axios.create({
  baseURL:'/api',
  timeout:5000
})
  return fun(config)
}