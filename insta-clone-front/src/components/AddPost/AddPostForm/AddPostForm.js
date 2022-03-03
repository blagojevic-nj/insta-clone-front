import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";
import {ImageLoader} from "../../ImageLoader/ImageLoader"

const schema = yup.object().shape({
    text: yup.string().required("Obavezno polje"),
    picture: yup.string(),
});
export const AddPostForm = ({onSubmit}) => {
    const [fileString, setFileString] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const preOnSubmit = (data) => {
        data.picture = fileString;
        onSubmit(data);
    }
    
    return <form className="registration-container " onSubmit={handleSubmit(preOnSubmit)}>
        <h1>Add new post</h1>
        <p>Share your big moments with others</p>
        <div className="form-group mb-2" >
            <input type={"text"} className="form-control" placeholder="Desription" name="text" {...register("text")}></input>
            <p className="error-message">{errors["text"]?.message}</p>
        </div>
        <div className="form-group mb-3">
        <div className="custom-file">
            <label className="custom-file-label align-left">Slika</label>
            <ImageLoader setFileString={setFileString}/>
            <p className="error-message">{errors["picture"]?.message}</p>
        </div>
        </div>
        <div className="form-group">
            <button type="button submit" className="btn btn-primary btn-block w-100">Add post</button>
        </div>
    </form>
}