import React from "react";
import { Navigate } from "react-router-dom";
import {isAuthenticated} from "../helpers/AuthHelper"

function ProtectedRoute({ component, navigate}) {
  return isAuthenticated() ? component : navigate;
}

export default ProtectedRoute;