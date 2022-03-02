import * as postService from "../../services/PostService"
import * as imageHelper from "../../helpers/ImageHelper"

import "../Registration/Registration.css"

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const schema = yup.object().shape({
    text: yup.string().required("Obavezno polje"),
    picture: yup.string(),
});

const AddPost = () => {

    const [fileString, setFileString] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        data.picture = fileString;
        postService.publishPost(data).then((result)=>{
            window.location.href = "http://localhost:3000/home"
        }).catch((error) => {
            toast("neka greska")
        })
    }

    const readFile = async (e) => {
        const file_string = await imageHelper.readFile(e)
        setFileString(file_string);
    }

    return <div className="main-container">
        <div className="colon">
            <form className="registration-container " onSubmit={handleSubmit(onSubmit)}>
                <h1>Add new post</h1>
                <p>Share your big moments with others</p>
                <div className="form-group mb-2" >
                    <input type={"text"} className="form-control" placeholder="Desription" name="text" {...register("text")}></input>
                    <p className="error-message">{errors["text"]?.message}</p>
                </div>
                <div className="form-group mb-3">
                <div className="custom-file">
                    <label className="custom-file-label align-left">Slika</label>
                    <input type="file" className="custom-file-input" accept="image/png, image/jpeg, image/jpg" id="inputGroupFile01" onChange={(e) => readFile(e.target)}/>
                    <p className="error-message">{errors["picture"]?.message}</p>
                </div>
                </div>
                <div className="form-group">
                    <button type="button submit" className="btn btn-primary btn-block w-100">Sign up</button>
                </div>
            </form>
        </div>
    </div>
    
}
export default AddPost;