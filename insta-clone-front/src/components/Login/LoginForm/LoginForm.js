import {REACT_APP_URL} from "../../constants"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    password: yup.string().required("Obavezno polje"),
    username: yup.string().required("Obavezno polje!")
});

export const LoginForm = ({onSubmit}) => {
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return <>
        <form className="login-container login-top-container" onSubmit={handleSubmit(onSubmit)}>
            <h1>Instagram</h1>
            <div className="form-group mb-2" >
                <input type={"text"} className="form-control" placeholder="Username" name="username" {...register("username")}></input>
                <p className="error-message">{errors["username"]?.message}</p>
            </div>
            <div className="form-group mb-2">
                <input type={"password"} className="form-control" placeholder="Password" name="password" {...register("password")}></input>
                <p className="error-message">{errors["password"]?.message}</p>
            </div>
            <div className="form-group">
                <button type="button submit" className="btn btn-primary w-100">Log in</button>
            </div>
            <hr/>
            <a className="forgotten-password" href={`${REACT_APP_URL}/forgotten-password`}>Forgotten your password?</a>
        </form>
    </>
}