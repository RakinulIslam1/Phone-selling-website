import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const google = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };

    useEffect( () =>{
        const unSub = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            
        })
        return () =>{
            return unSub();
        }
    }, [])

    const authInfo = { user, createUser, login, loading, logout, google };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;