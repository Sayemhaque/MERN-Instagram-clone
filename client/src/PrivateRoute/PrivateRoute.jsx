
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const user = true;
    return user ? children : <Navigate to='login'></Navigate>
};

export default PrivateRoute;