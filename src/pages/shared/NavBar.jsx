import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
        .then(() => console.log('Logged out'))
    }

    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/bookings'>My Bookings</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
            {user? <Link to='/login'><button onClick={handleLogout} className="btn btn-error mr-5 w-[120px]">Logout</button></Link>:<Link to='/login'><button className="btn btn-primary mr-5 w-[120px]">Login</button></Link>}
            <button className="btn btn-outline btn-accent">Appointment</button>
            </div>
        </div>
    );
};

export default Header;