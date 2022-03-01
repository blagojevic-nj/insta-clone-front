import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import "./Login.css"
import * as authService from "../../services/AuthService"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    password: yup.string().required("Obavezno polje"),
    username: yup.string().required("Obavezno polje!")
});

const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        authService.login(data)
    }

    return <div className="main-container">
        <div className="col align-items-center justify-content-center">
            <form className="login-top-container" onSubmit={handleSubmit(onSubmit)}>
                <h1>Instagram</h1>
                <div className="form-group mb-2" >
                    <input type={"text"} className="form-control" placeholder="Username" name="username" {...register("username")}></input>
                    <p className="error-message">{errors["password"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"password"} className="form-control" placeholder="Password" name="password" {...register("password")}></input>
                    <p className="error-message">{errors["password"]?.message}</p>
                </div>
                <div className="form-group">
                    <button type="button submit" className="btn btn-primary w-50">Log in</button>
                </div>
                <hr/>
                <a className="forgotten-password" href="http://localhost:3000/forgotten-password">Forgotten your password?</a>
            </form>
            <div className="login-bottom-container">
                <label>Don't have an account?</label>
                <a className="sign-up" href="#">Sign up</a>
            </div>
        </div>
    </div>
    
}
export default Login;