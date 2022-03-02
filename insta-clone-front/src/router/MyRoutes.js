import { Routes, Route, Navigate } from "react-router-dom";
import ForgottenPassword from "../components/ForgottenPassword/ForgottenPassword";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFoundPage/NotFoundPage";
import Registration from "../components/Registration/Registration";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import UserProfile from "../components/UserProfile/UserProfile";
import * as helper from "../helpers/AuthHelper"


const MyRoutes = () => {
    return <Routes>
        <Route exact path="" element={helper.isAuthenticated() ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route exact path="/home" element={helper.isAuthenticated() ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route exact path="/login" element={!helper.isAuthenticated() ? <Login/> :<Navigate to={"/home"}/>}/>
        <Route exact path="/profile/:id" element={<UserProfile/>}/>
        <Route exact path="/registration" element={!helper.isAuthenticated() ? <Registration/> :<Navigate to={"/home"}/>}/>
        <Route exact path="/forgotten-password" element={helper.isAuthenticated() ? <Home/> : <ForgottenPassword/>}/>
        <Route exact path="/reset-password/:token" element={helper.isAuthenticated() ? <Home/> : <ResetPassword/>}/>
        <Route exact path="*" element={<NotFound/>}/>
    </Routes>
}

export default MyRoutes;