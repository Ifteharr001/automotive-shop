import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //  created account
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAuthProvider = new GoogleAuthProvider();

    // google login
    const googleProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }


    // Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    // onAuthState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return() =>{
            unSubscribe();
        }
    } ,[])





    const AuthInfo = {user, loading, createUser, signIn, googleProvider, logOut}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;