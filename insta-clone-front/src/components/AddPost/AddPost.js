import * as postService from "../../services/PostService"
import "../Registration/Registration.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AddPostForm} from "./AddPostForm/AddPostForm"

toast.configure()


const AddPost = () => {
    const onSubmit = (data) => {
        postService.publishPost(data).then((result)=>{
            window.location.href = "/home"
        }).catch((error) => {
            toast("neka greska")
        })
    }

    return <div className="main-container">
        <div className="colon">
            <AddPostForm onSubmit={onSubmit}/>
        </div>
    </div>
    
}
export default AddPost;