import "./Navbar.css"
import {searchUsers} from "../../services/UserService"
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Brand } from "./Brand/Brand";
import { Options } from "./Options/Options";

export const Navbar = () => {
    const[query, setQuery] = useState("");


    const search = (e) => {
        e.preventDefault()
        searchUsers(query).then((result) => {
            
        })
    }

    return <>
        <nav className="my-navbar navbar sticky-top navbar-light justify-content-around">
            <Brand height={"30px"}/>
            <SearchBar search={search} setQuery={setQuery} />
            <Options />
        </nav>
    </>
}

export default Navbar;