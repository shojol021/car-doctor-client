import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Social from './Social';

const Login = () => {
    const navigate = useNavigate()
    const { signin } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from)

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-3">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Social></Social>
                    <div className='text-center mb-5'>New to Car Doctor? <Link to='/signup'><span className='text-orange-500'>Sign Up</span></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;