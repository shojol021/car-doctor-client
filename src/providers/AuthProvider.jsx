import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../assets/firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const signup = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser && currentUser.email)
            setLoader(false)
            if(currentUser.email){
                const loggedUser = {email: currentUser.email}
            fetch('http://localhost:5000/jwt', {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('jwt', data)
                localStorage.setItem('access-token', data.token)
            })
            }
            else{
                localStorage.removeItem('access-token')
            }
            
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        signup,
        signin,
        googleLogin,
        logout,
        user,
        loader
        
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;