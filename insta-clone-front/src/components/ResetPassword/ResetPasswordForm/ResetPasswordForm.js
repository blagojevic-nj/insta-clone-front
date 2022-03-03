import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    password: yup.string().min(8, "Lozinka mora imati minimum 8 karaktera!").required("Obavezno polje"),
    repeatedPassword: yup.string()
    .test('passwords-match', 'Lozinke se ne poklapaju!', function(value){
      return this.parent.password === value
    }),
});

export const ResetPasswordForm = ({onSubmit}) => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return <form className="rp-container" onSubmit={handleSubmit(onSubmit)}>
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
}