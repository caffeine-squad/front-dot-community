import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token){
    return {
      ...config, 
      headers: {
      ...(config.headers ?? {}), 
      Authorization: token, 
      'Referrer-Policy': 'no-referrer-when-downgrade'
    }}}
    else {
      return {
        ...config,
        headers: {
          ...(config.headers ?? {}),
          'Referrer-Policy': 'no-referrer-when-downgrade'
        }
      };
    }
  }
)