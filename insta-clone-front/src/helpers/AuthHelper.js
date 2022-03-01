import jwtDecode from "jwt-decode";

export const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    
    if(!token) return false;
    return true;
}

export const getRole = () => {
    const token = sessionStorage.getItem("token");
    if(!token) return "";

    const decoded = jwtDecode(token);

    return decoded.role;
}