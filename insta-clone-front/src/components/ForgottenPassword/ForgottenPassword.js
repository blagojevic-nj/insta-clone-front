import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import "../Login/Login.css"
import "./ForgottenPassword.css"

import * as userService from "../../services/UserService"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const schema = yup.object().shape({
    email: yup.string().required("Obavezno polje").email("Unesite validan email!"),
});

const ForgottenPassword = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        userService.resetPassword(data.email).then((result) => {
            toast("Proverite vas email!")
        })
    }

    return <div className="main-container">
    <div className="colon">
        <form className="fp-container" onSubmit={handleSubmit(onSubmit)}>
            <h5>Trouble with logging in?</h5>
            <p>Enter your email address, phone number or username, and we'll send you a link to get back into your account.</p>
            <div className="form-group mb-2" >
                <input type={"text"} className="form-control" placeholder="Email" name="email" {...register("email")}></input>
                <p className="error-message">{errors["email"]?.message}</p>
            </div>
            <div className="form-group">
                <button type="button submit" className="btn btn-primary w-50">Send link </button>
            </div>
            <hr/>
            <a className="new-account" href="http://localhost:3000/registration">Create new account</a>
        </form>
        <div className="cool-btn">
            <a className="new-account" href="http://localhost:3000/login">Back to login</a>
        </div>
    
    </div>
</div>
}

export default ForgottenPassword;