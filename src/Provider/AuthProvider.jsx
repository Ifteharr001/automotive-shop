import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //  created account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAuthProvider = new GoogleAuthProvider();

    // google login
    const googleProvider = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }


    // Logout
    const logOut = () => {
        return signOut(auth);
    }
    // onAuthState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return() =>{
            unSubscribe();
        }
    } ,[])





    const AuthInfo = {user, createUser, signIn, googleProvider, logOut}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;