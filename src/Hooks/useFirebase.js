import InitializeAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

InitializeAuthentication()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [err,setErr]=useState('')
    const [isLoading,setIsLoading]=useState(true)


    // sign in with google
    const googleSignIn =()=>{
       return signInWithPopup(auth, googleProvider)
    }

    // obserber system for user
    useEffect(()=>{
        setIsLoading(true)
        const unsubscrib=onAuthStateChanged(auth, (user) => {
                            if (user) {
                            setUser(user)
                            } else {
                            setUser({})
                            }
                            setIsLoading(false)
                        });
        return ()=> unsubscrib();
    },[])

    // sign out handle
    const logout=()=>{
        signOut(auth).then(() => {
             setUser({})
          }).catch((error) => {
            setErr(error.message)
          });
    }

    return {
        user,
        err,
        setUser,
        setErr,
        isLoading,
        setIsLoading,
        googleSignIn,
        logout,
    }
};

export default useFirebase;