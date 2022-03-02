import axios from 'axios';

axios.interceptors.request.use(
   (req) => {
    const token = sessionStorage.getItem("token");
    
    if(token)
    {
        const headers = { headers: {
            "Authorization" : `Bearer ${token}`,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }}
        req.headers = headers;
    }
   },
   (err) => {
      return Promise.reject(err);
   }
);