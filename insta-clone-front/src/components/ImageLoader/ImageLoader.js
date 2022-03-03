import { readFile } from "../../helpers/ImageHelper"

export const ImageLoader = ({setFileString}) => {
    
    const readingFile = async (e) => {
        const file_string = await readFile(e)
        setFileString(file_string);
    }
    
    return <input type="file" 
            className="custom-file-input" 
            accept="image/png, image/jpeg, image/jpg" 
            id="inputGroupFile01" 
            onChange={(e) => readingFile(e.target)}/>
}