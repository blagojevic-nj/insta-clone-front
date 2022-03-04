import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { useState } from "react";
import {ImageLoader} from "../../ImageLoader/ImageLoader"
import { Input } from '../../Input/Input';

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
        
        <Input type={"text"} className="form-control" placeholder="Desription" name="text" register={register} errors={errors}/>
        
        <ImageLoader setFileString={setFileString} title="Slika" />

        <div className="form-group">
            <button type="button submit" className="btn btn-primary btn-block w-100">Add post</button>
        </div>
    </form>
}