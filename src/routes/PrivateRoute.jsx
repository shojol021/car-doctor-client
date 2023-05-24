import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {loader, user} = useContext(AuthContext)

    if(loader){
        return <h2>Loading...</h2>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;