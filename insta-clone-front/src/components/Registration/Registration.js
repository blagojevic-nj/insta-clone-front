import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import * as authService from "../../services/AuthService"
import * as imageHelper from "../../helpers/ImageHelper"

import "./Registration.css"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const schema = yup.object().shape({
    password: yup.string().required("Obavezno polje").min(8, "Lozinka mora imati minimum 8 karaktera!"),
    username: yup.string().required("Obavezno polje!"),
    repeatedPassword: yup.string()
    .test('passwords-match', 'Lozinke se ne poklapaju!', function(value){
      return this.parent.password === value
    }),
    email: yup.string().required("Obavezno polje").email("Unesite validan mejl!"),
    name: yup.string().required("Obavezno polje"),
    bio: yup.string(),
    profilePicture: yup.string(),
});

const Registration = () => {

    const [fileString, setFileString] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        data.profilePicture = fileString;
        authService.registration(data).then((result) => {
            authService.login({"username": data.username, "password": data.password}).then((result) => {
                if(result.data.token){
                    sessionStorage.setItem("token", result.data.token);
                    window.location.href="/home"
                }
            })
        }).catch((error) => {
            toast.error(error.message);
        })
    }

    const readFile = async (e) => {
        const file_string = await imageHelper.readFile(e)
        setFileString(file_string);
    }

    return <div className="main-container">
        <div className="colon">
            <form className="registration-container " onSubmit={handleSubmit(onSubmit)}>
                <h1>Instagram</h1>
                <p>Sign up to see photos and videos from your friends.</p>
                <div className="form-group mb-2" >
                    <input type={"text"} className="form-control" placeholder="Username" name="username" {...register("username")}></input>
                    <p className="error-message">{errors["username"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"password"} className="form-control" placeholder="Password" name="password" {...register("password")}></input>
                    <p className="error-message">{errors["password"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"password"} className="form-control" placeholder="Repeat password" name="repeatedPassword" {...register("repeatedPassword")}></input>
                    <p className="error-message">{errors["repeatedPassword"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"email"} className="form-control" placeholder="Email" name="email" {...register("email")}></input>
                    <p className="error-message">{errors["email"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"text"} className="form-control" placeholder="Name" name="name" {...register("name")}></input>
                    <p className="error-message">{errors["name"]?.message}</p>
                </div>
                <div className="form-group mb-2">
                    <input type={"text"} className="form-control" placeholder="Bio" name="bio" {...register("bio")}></input>
                    <p className="error-message">{errors["bio"]?.message}</p>
                </div>
                <div className="form-group mb-3">
                <div className="custom-file">
                    <label className="custom-file-label align-left">Profilna slika</label>
                    <input type="file" className="custom-file-input" accept="image/png, image/jpeg, image/jpg" id="inputGroupFile01" onChange={(e) => readFile(e.target)}/>
                </div>
                </div>
                <div className="form-group">
                    <button type="button submit" className="btn btn-primary btn-block w-100">Sign up</button>
                </div>
            </form>
        </div>
    </div>
    
}
export default Registration;