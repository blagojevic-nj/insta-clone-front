import { Routes, Route, Navigate } from "react-router-dom";
import ForgottenPassword from "../components/ForgottenPassword/ForgottenPassword";
import Home from "../components/Home";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFoundPage";
import * as helper from "../helpers/AuthHelper"


const MyRoutes = () => {
    return <Routes>
        <Route exact path="/home" element={helper.isAuthenticated() ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route exact path="/login" element={!helper.isAuthenticated() ? <Login/> :<Navigate to={"/home"}/>}/>
        <Route exact path="/login" element={!helper.isAuthenticated() ? <Login/> :<Navigate to={"/home"}/>}/>
        <Route exact path="/home2" element={<Home/>}/>
        <Route exact path="*" element={<NotFound/>}/>
    </Routes>
}

export default MyRoutes;