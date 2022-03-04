import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImageLoader } from '../../../UtilModule/ImageLoader/ImageLoader';
import {Input} from "../../../UtilModule/Input/Input"

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

export const RegistrationForm = ({onSubmit}) => {
    const [fileString, setFileString] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const preOnSubmit = (data) => {
        data.profilePicture = fileString;
        onSubmit(data);
    }

    return <form className="registration-container " onSubmit={handleSubmit(preOnSubmit)}>
        <h1>Instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>

        <Input type={"text"} className="form-control" placeholder="Username" name="username" register={register} errors={errors}/>
        
        <Input type={"password"} className="form-control" placeholder="Password" name="password" register={register} errors={errors}/>
        
        <Input type={"password"} className="form-control" placeholder="Repeat password" name="repeatedPassword" register={register} errors={errors}/>
        
        <Input type={"email"} className="form-control" placeholder="Email" name="email" register={register} errors={errors}/>

        <Input type={"text"} className="form-control" placeholder="Name" name="name" register={register} errors={errors}/>
        
        <Input type={"text"} className="form-control" placeholder="Bio" name="bio" register={register} errors={errors}/>
        
        <ImageLoader setFileString={setFileString} title="Profilna slika" />

        <div className="form-group">
            <button type="button submit" className="btn btn-primary btn-block w-100">Sign up</button>
        </div>
    </form>
}