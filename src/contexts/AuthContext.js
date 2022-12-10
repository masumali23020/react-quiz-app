import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const  AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurentUser] = useState(null)
    useEffect(() => {
        const auth = getAuth()
      const unsubscrib =  onAuthStateChanged(auth,(user)=>{
            setCurentUser(user);
            setLoading(false);

        })
        return unsubscrib
    },[])

    // signup function 
   async function signup(email, password, username){
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)

        // profile update 
        await updateProfile(auth.currentUser,{
            displayName: username
        })
        const user = auth.currentUser;
        setCurentUser({
            ...user,
        })
 
    }

    // login function 
    function login(email, password){
        const auth = getAuth();

        return signInWithEmailAndPassword(auth, email, password)

    }

    // logOut function 
    function logOut(){
        const auth = getAuth()
        return signOut(auth)
    }
    const value ={
        currentUser,
        signup,
        login,
        logOut,

    }
    

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}