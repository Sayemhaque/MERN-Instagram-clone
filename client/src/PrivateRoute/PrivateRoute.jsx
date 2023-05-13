import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p>Loading....</p>
    }
    if(user){
        return children
    }
   
    return  <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;