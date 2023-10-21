import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }
    if(user){
        return children;
    }else{
        return <Navigate to="/login"></Navigate>;
    }
    
};

export default PrivateRoute;