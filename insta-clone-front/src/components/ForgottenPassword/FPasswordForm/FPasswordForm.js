import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import {REACT_APP_URL} from "../../constants"


const schema = yup.object().shape({
    email: yup.string().required("Obavezno polje").email("Unesite validan email!"),
});

export const FPasswordForm = ({onSubmit}) => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    return <form className="fp-container" onSubmit={handleSubmit(onSubmit)}>
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
        <a className="new-account" href={`${REACT_APP_URL}/registration`}>Create new account</a>
    </form>
}