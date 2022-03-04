import axios from 'axios';

axios.interceptors.request.use(
   (req) => {
    const token = sessionStorage.getItem("token");
    
    if(token)
    {
        req.headers.common.Authorization = `Bearer ${token}`;
    }
    return req;
   },
   (err) => {
      return Promise.reject(err);
   }
);