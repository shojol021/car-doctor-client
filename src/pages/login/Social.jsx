import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const navigate = useNavigate()
    const {googleLogin} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            const user = res.user;
            console.log(user)
            navigate(from)

        })
        .catch(err => console.log(err))
    }
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <div className='text-center'>
            <button onClick={handleGoogleLogin} className="btn btn-success">Google</button>
            </div>
        </div>
    );
};

export default Social;