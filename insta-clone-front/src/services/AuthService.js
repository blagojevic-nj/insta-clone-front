import axios from "axios"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export const login = (credentials) => {
    axios.post(process.env.REACT_APP_SERVER_URL + "/api/auth/login", credentials).then((result) => {
        if(result.data.token){
            sessionStorage.setItem("token", result.data.token);
            toast.success("Uspesno logovanje!")
        }
    }).catch((error) => {
        toast.error("Losi kredencijali")
    });

}