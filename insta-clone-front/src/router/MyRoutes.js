import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import AddPost from "../components/AddPost/AddPost";
import ForgottenPassword from "../components/ForgottenPassword/ForgottenPassword";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFoundPage/NotFoundPage";
import Registration from "../components/Registration/Registration";
import ResetPassword from "../components/ResetPassword/ResetPassword";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path=""
        element={
          <ProtectedRoute
            component={<Home />}
            navigate={<Navigate to={"/login"} />}
          />
        }
      />
      <Route
        exact
        path="/home"
        element={
          <ProtectedRoute
            component={<Home />}
            navigate={<Navigate to={"/login"} />}
          />
        }
      />
      <Route
        exact
        path="/login"
        element={
          <ProtectedRoute
            component={<Navigate to={"/home"} />}
            navigate={<Login/>}
          />
        }
      />
      <Route
        exact
        path="/registration"
        element={
          <ProtectedRoute
            component={<Home />}
            navigate={<Registration/>}
          />
        }
      />
      <Route
        exact
        path="/forgotten-password"
        element={
          <ProtectedRoute
            component={<Home />}
            navigate={<ForgottenPassword/>}
          />
        }
      />
      <Route
        exact
        path="/reset-password/:token"
        element={
          <ProtectedRoute
            component={<Home />}
            navigate={<ResetPassword/>}
          />
        }
      />
      <Route
        exact
        path="/add-post"
        element={
          <ProtectedRoute
            component={<AddPost />}
            navigate={<Navigate to={"/login"} />}
          />
        }
      />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
