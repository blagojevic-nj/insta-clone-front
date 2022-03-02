import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import "./ResetPassword.css"
import * as userService from "../../services/UserService"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const schema = yup.object().shape({
    password: yup.string().min(8, "Lozinka mora imati minimum 8 karaktera!").required("Obavezno polje"),
    repeatedPassword: yup.string()
    .test('passwords-match', 'Lozinke se ne poklapaju!', function(value){
      return this.parent.password === value
    }),
});

const ResetPassword = () => {
    let { token } = useParams();

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        userService.changePasswordWithToken(token, data).then((result) =>{
            window.location.href="http://localhost:3000/login"
        })
    }

    return <div className="main-container">
    <div className="colon">
        <form className="rp-container" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-2">Reset password</h2>
            <div className="form-group mb-2" >
                <input type={"password"} className="form-control" placeholder="Password" name="password" {...register("password")}></input>
                <p className="error-message">{errors["password"]?.message}</p>
            </div>
             <div className="form-group mb-2" >
                <input type={"password"} className="form-control" placeholder="Repeat password" name="repeatedPassword" {...register("repeatedPassword")}></input>
                <p className="error-message">{errors["repeatedPassword"]?.message}</p>
            </div>
            <div className="form-group">
                <button type="button submit" className="btn btn-primary w-100">Confirm</button>
            </div>
            <hr/>
        </form>
    </div>
</div>
}

export default ResetPassword;